/**
 * Created by pligor on 4/20/15.
 */
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../../../declarations/waypoints.d.ts" />
/// <reference path="../models/MainModel.ts" />
/// <reference path="../layouts/HeaderLayout.ts" />
/// <reference path="JumbotronLayout.ts" />

/// <reference path="../layouts/AnnouncementLayout.ts" />

/// <reference path="HowItWorksLayout.ts" />
/// <reference path="CalculationsLayout.ts" />
/// <reference path="../itemviews/PortfolioItemView.ts" />
/// <reference path="../itemviews/TestimonialsItemView.ts" />
/// <reference path="../itemviews/ContactItemView.ts" />
/// <reference path="../radio/RadioEvents.ts" />

module Pligor {

    /*interface MyRegion {
        regionName: string
        regionSelector: string
    }

    interface MyRegionJS {
        [index: string]: string
    }

    class MyRegionsCollection {
        regions:MyRegion[];

        addRegion(jsObj:MyRegionJS) {

        }

        getJsObj() {
            var jsObj:any;

            this.regions.forEach((curRegion, index/!*, array*!/) => {
                jsObj[curRegion.regionName] = curRegion.regionSelector
            })

            return jsObj
        }
    }*/

    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    export class MainLayout extends Marionette.LayoutView<MainModel> {
        model:MainModel

        template = "#maintemplate"

        jumbotronRegionMinimumHeight = 450; //px    //TODO integrate with gulp to make this passed in less

        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)

        attachMainLayoutToTheDOM() {
            //you could place this inside onRender instead
            $("body").prepend(this.render().el)
        }

        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/

        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        regions(options: any) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                headerRegion: "section#header",  //#header is unnecessary since it works like a jquery selector
                //(not exactly the same though because body > header is not working)
                jumbotronRegion: "section#jumbotron",
                announcementRegion: "section#announcement_section",
                howItWorksRegion: "section#how_it_works_section",
                calculationsRegion: "section#calculations_section",
                portfolioRegion: "section#portfolio_section",
                testimonialsRegion: "section#testimonials_section",
                contactRegion: "section#contact_section"
            }
        }
        headerRegion: Marionette.Region //to have it statically typed
        jumbotronRegion: Marionette.Region
        announcementRegion: Marionette.Region
        howItWorksRegion: Marionette.Region
        calculationsRegion: Marionette.Region
        testimonialsRegion: Marionette.Region
        portfolioRegion: Marionette.Region
        contactRegion: Marionette.Region

        //in order to change the model of the main layout due to a child event (any depth child) then we need to propagate

        childEvents() { //this can also be a variable if you want something more static
            return {
                /*render: (childView) => { //this callback will be called whenever a child is rendered or emits a "render" event
                    console.log("a childview has been rendered")
                },*/
            }
        }

        constructor(options?:any) {  //we make it optional here
            super(options);

            //TODO maybe this.template and this.regions are missing from declaration?

            //Avoid Re-Rendering The Entire LayoutView
            /*Instead, if you are binding the
             layoutView's template to a model and need to update portions of the layoutView,
             you should listen to the model's "change" events and only update the
             necessary DOM elements.
             WHICH MEANS WE SHOULD DO jQUERY*/
            /*this.model.on("change:breadcrumb", (curModel:Pligor.MainModel) => {
                this.$el.find(".breadcrumb_class").html(curModel.get("breadcrumb"))
            })*/
            this.fillViewPortHeightWithJumbotron()

            this.makeSectionsResetRoute()
        }

        initialize(options:Backbone.ViewOptions<Pligor.MainModel>):void {
            super.initialize(options);
        }

        events():any {
            //return super.events();
            return {
                /*"click #testing_button": () => {
                    console.log(this.model.get("breadcrumb"))

                    this.model.set("breadcrumb", "/gamiseta")

                    console.log(this.model.get("breadcrumb"))
                }*/
            }
        }

        /**
         * As a rule of thumb, most of the time you'll want to render any nested views in the onBeforeRender callback.
         */
        onBeforeRender():void {
            //super.onBeforeRender();
        }

        onRender():void {
            //super.onRender();

            //rendering the children

            //this.showChildView('footer', new FooterView());   //footer is the region name

            this.headerRegion.show(new HeaderLayout()); //this.provideMenuDataStatically();
            this.jumbotronRegion.show(new JumbotronLayout()); //empty/no model for the time being
            this.announcementRegion.show(new AnnouncementLayout());
            this.listenTo(this.announcementRegion.currentView, "poisonpill", () => {
                this.announcementRegion.empty() //remove the region contents
            });
            this.howItWorksRegion.show(new HowItWorksLayout()); //empty/no model for the time being
            this.calculationsRegion.show(new CalculationsLayout()); //empty/no model for the time being
            this.portfolioRegion.show(new PortfolioItemView()); //empty/no model for the time being
            this.testimonialsRegion.show(new TestimonialsItemView()); //empty/no model for the time being
            this.contactRegion.show(new ContactItemView()); //empty/no model for the time being
        }

        provideMenuDataStatically() {   //later decouple this part by using the wreqr/radio api and have it set in application
            //App.layoutView.getRegion("headerRegion")  //for dynamic situations
            //var headerLayout:Pligor.HeaderLayout = App.layoutView.headerRegion.currentView    //we are already in here
            var headerLayout:Pligor.HeaderLayout = this.headerRegion.currentView;
            var menuCollectionView:Pligor.MenuCollectionView = headerLayout.menuRegion.currentView;
            //if you fetch a collection, the view is re-rendered automatically, no manually setup is necessary in marionette ;)
            /*menuCollectionView.collection.fetch({
             success: function (collection, response, options) {
             console.log(collection.length)
             }
             })*/

            menuCollectionView.collection.add([
                {
                    "id": 1,
                    "menuItemTitle": "ενεργειακος συμψηφισμος (net metering)",
                    "menuItemSubtitle": "τι είναι και πως λειτουργεί",
                    "menuItemTarget": "how_it_works"
                },
                {
                    "id": 2,
                    "menuItemTitle": "υπολογισε κερδος &amp; κοστος",
                    "menuItemSubtitle": "δες γιατί συμφέρει",
                    "menuItemTarget": "calculations"
                },
                {
                    "id": 3,
                    "menuItemTitle": "εργα / portfolio",
                    "menuItemSubtitle": "από το 1982",
                    "menuItemTarget": "portfolio"
                },
                {
                    "id": 4,
                    "menuItemTitle": "τι λενε οι πελατες",
                    "menuItemSubtitle": "γνώρισε τους",
                    "menuItemTarget": "testimonials"
                },
                {
                    "id": 5,
                    "menuItemTitle": "επικοινωνια",
                    "menuItemSubtitle": "τηλεφωνο / email",
                    "menuItemTarget": "contact"
                }
            ])
        }

        makeSectionsResetRoute() {
            $(document).ready(function() {
                $("section.majorsection").waypoint({
                    handler: function(direction: string) {  //direction is either "up" or "down" (and it means the way the user is scrolling)
                        //console.log(direction);

                        if(direction === "up") {
                            //console.log("we have a hit crazy baby");
                            var curChannel = RadioEvents().routerChannel;
                            Backbone.Radio.channel(curChannel.getName()).trigger(curChannel.majorSectionWaypoint_crossed_50percent_viewport)
                        } else if(direction === "down") {
                            //nop for the time being
                        } else {
                            throw "unexpected direction";
                        }
                    },
                    offset: "50%"   //when the line of the top of the view is at the middle of the viewport
                })
            })
        }

        fillViewPortHeightWithJumbotron() {
            $(document).ready(() =>{
                var headerHeight = this.headerRegion.$el.outerHeight();

                var newHeight = $(window).height() - headerHeight;

                this.jumbotronRegion.$el.children().first().height(Math.max(this.jumbotronRegionMinimumHeight, newHeight))
            })
        }

//ADVANCED
        //regionClass: SomeCustomRegion //replace Region class with your own
        //CustomRegionClassReference
    }
}

/**
 * Created by pligor on 4/20/15.
 */

/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/LogoModel.ts" />
/// <reference path="../itemviews/LogoItemView.ts" />
/// <reference path="../collectionviews/MenuCollectionView.ts" />
/// <reference path="../collections/MenuItemCollection.ts" />

module Pligor {

    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    export class HeaderLayout extends Marionette.LayoutView<Backbone.Model> {
        model: Backbone.Model

        curLogoId = 1

        template = "#headertemplate"

        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)

        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/

        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         * @returns {{header: string, mainRegion: string, footer: string}}
         */
        regions(options: any) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                logoRegion: "div.logo_wrapper",  //#header is unnecessary since it works like a jquery selector
                //(not exactly the same though because body > header is not working)
                menuRegion: "div.mainmenu_wrapper"
            }
        }
        logoRegion: Marionette.Region //to have it statically typed
        menuRegion: Marionette.Region

        //in order to change the model of the main layout due to a child event (any depth child) then we need to propagate

        childEvents() { //this can also be a variable if you want something more static
            return {
                /*render: (childView) => { //this callback will be called whenever a child is rendered or emits a "render" event
                    console.log("a childview has been rendered")
                }*/

            }
        }

        constructor(options?:any) {  //we make it optional here
            super(options);

            //Avoid Re-Rendering The Entire LayoutView
            /*Instead, if you are binding the
             layoutView's template to a model and need to update portions of the layoutView,
             you should listen to the model's "change" events and only update the
             necessary DOM elements.
             WHICH MEANS WE SHOULD DO jQUERY*/
            /*this.model.on("change:breadcrumb", (curModel:Pligor.MainModel) => {
                this.$el.find(".breadcrumb_class").html(curModel.get("breadcrumb"))
            })*/

            this.model = new Backbone.Model();  //dummy model, not useful anywhere right now, we do not have data in the layout
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

            //this.showChildView('footer', new FooterView());   //footer is the region name
        }

        onRender():void {
            //super.onRender();
            //console.log("we are getting rendered");

            this.logoRegion.show(new LogoItemView({model: new LogoModel({id: this.curLogoId})}));
            this.menuRegion.show(new MenuCollectionView({collection: new MenuItemCollection(

                /*[
                    new MenuItemModel({id: 2}),
                    new MenuItemModel({
                        "id": 1,
                        "menuItemTitle": "dokimastikos titlos gia menu",
                        "menuItemSubtitle": "testing sub menu"
                    })
                    ]*/
                //[]  //empty at first, we will provide it later, either from the server or statically
                [
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
                ].map((obj, index, arr) => new MenuItemModel(obj))
            )}));
        }

//ADVANCED
        //regionClass: SomeCustomRegion //replace Region class with your own
        //CustomRegionClassReference
    }
}

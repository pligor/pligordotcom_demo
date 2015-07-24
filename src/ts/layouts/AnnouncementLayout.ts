/**
 * Created by pligor on 4/20/15.
 */

/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../radio/RadioEvents.ts" />
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../itemviews/FekPopupItemView.ts" />

module Pligor {

    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    export class AnnouncementLayout extends Marionette.LayoutView<Backbone.Model> {
        model: Backbone.Model

        template = "script#announcement_template"

        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)

        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/

        tagName():string {
            return "div"
        }

        className():string {
            return "announcement"
        }

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
                popupRegion: "div.popup_wrapper"  //#header is unnecessary since it works like a jquery selector
                //(not exactly the same though because body > header is not working)
            }
        }
        popupRegion: Marionette.Region //to have it statically typed

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

        initialize(options:Backbone.ViewOptions<Backbone.Model>):void {
            super.initialize(options);

            var curChannel = RadioEvents().routerChannel;

            Backbone.Radio.channel(curChannel.getName()).comply(curChannel.fekPopupShow, () => {
                //console.log("we are complying")

                //no scroll according to this: http://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling
                $("body").css("overflow","hidden")

                this.popupRegion.show(new FekPopupItemView());

                this.listenTo(this.popupRegion.currentView, "poisonpill", () => {
                    this.stopListening(this.popupRegion.currentView)

                    this.popupRegion.empty()

                    $("body").css("overflow","auto")

                    window.history.back()
                })
            })
        }

        events():any {
            //return super.events();
            return {
                "click .ok_button": () => {
                    this.triggerMethod("poisonpill")

                    //console.log("to koumpi patithike!")
                }
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
        }

        //ADVANCED
        //regionClass: SomeCustomRegion //replace Region class with your own
        //CustomRegionClassReference
    }
}

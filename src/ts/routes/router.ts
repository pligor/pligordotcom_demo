/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/backbone.d.ts" />
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/jquery.scrollTo.d.ts" />
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../radio/RadioEvents.ts" />

module Pligor {
    //TODO use marionette router instead
    export class MyRouter extends Backbone.Router {
        static dummyRoute = "#/";

        constructor(options?: Backbone.RouterOptions) {
            //if you put super on top of this.routes definition then it is not going to work
            //or maybe you could try setting routes as a function/method
            this.routes = {
                "": "welcoming",    //If the server has already rendered the entire page,
                // and you don't want the initial route to trigger when starting History, pass silent: true.

                "how_it_works": "how_it_worksAction",
                "calculations": "calculationsAction",
                "portfolio": "portfolioAction",
                "testimonials": "testimonialsAction",
                "contact": "contactAction",
                "fekpopup": "fekpopupAction"
            }

            super(options)

            var curChannel = RadioEvents().routerChannel;

            Backbone.Radio.channel(curChannel.getName()).on(curChannel.majorSectionWaypoint_crossed_50percent_viewport, () => {
                //console.log("something amazing happened")

                this.navigate(MyRouter.dummyRoute, {trigger: false, replace: true});
            })
        }

        fekpopupAction() {
            //have the announcement layout render its child region

            var curChannel = RadioEvents().routerChannel;

            Backbone.Radio.channel(curChannel.getName()).command(curChannel.fekPopupShow)
        }

        /**
         * no data are passed inside
         */
        welcoming() {
            //console.log("welcoming route")
        }

        //TODO make the msec parametric according to the offset of each element from the top of the screen
        //this works well if the menu is at the top of the scroll always
        //if the menu is fixed then it must be more dynamic where it is calculated each time

        how_it_worksAction() {
            //$("#copy").html("Heilroom Roses are great Mother's Day flowers")

            //var jqueryObj: any = $('#how_it_works2');
            //jqueryObj.smoothScroll();

            //TODO include already found typed definitions
            $.scrollTo("#how_it_works_section", 250, {      //same as $(window).scrollTo
                onAfter: (/*target, settings*/) => {    //todo fix declaration if necessary
                    //console.log("it has been completed")

                    //this.navigate("#calculations")
                    /*, {trigger: true, replace: true}*/
                }
            });

            //console.log("you are executing the custom hash action already")
            //console.log(jqueryObj);
        }

        calculationsAction() {
            $.scrollTo("#calculations_section", 500);
        }

        portfolioAction() {
            $.scrollTo("#portfolio_section", 750);
        }

        testimonialsAction() {
            $.scrollTo("#testimonials_section", 1000);
        }

        contactAction() {
            $.scrollTo("#contact_section", 1250);
        }
    }
}

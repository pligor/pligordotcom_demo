/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../../../declarations/greensock.d.ts" />
    /// <reference path="../../../declarations/modernizr.d.ts" />

module Pligor {

    declare
    var ScrollMagic:any;

    export class HowItWorksStep2of3Layout extends Marionette.LayoutView<Backbone.Model> {

        template = "script#how_it_works_step2of3_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        tagName() {
            return "div"
        }

        className() {
            return "step2of3"
        }

        constructor(options?:Backbone.ViewOptions<Backbone.Model>) {
            super(options)

            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }

        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        regions(options:any) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                 menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                //step1region: "article#how_it_works_step1of3",  //#header is unnecessary since it works like a jquery selector
                //(not exactly the same though because body > header is not working)
            }
        }

        //step1region: Marionette.Region //to have it statically typed

        private controller:any = new ScrollMagic.Controller()   //default settings

        private triggerHook = 0.95   //1 is identical to onEnter

        private durationForEachStep_px = 300

        private rowHeight_px = 250

        private numColums = 3

        onRender():void {
            //super.onRender();

            var firstPeriodEnergyBars = this.$el.find(".firstPeriodEnergyBars")
            var secondPeriodEnergyBars = this.$el.find(".secondPeriodEnergyBars")
            var thirdPeriodEnergyBars = this.$el.find(".thirdPeriodEnergyBars")

            if (Modernizr.touch) {
                [firstPeriodEnergyBars, secondPeriodEnergyBars, thirdPeriodEnergyBars].forEach((elem, ind, arr) => {
                    elem.css({
                        height: "100%"
                    })
                })
            } else {
                var triggerElem = this.$el.find("div.trigger_period")[0]

                var targetElem = this.$el.find("div.periods_row")[0]

                var totalDuration_px = this.durationForEachStep_px * this.numColums

                //calculated the row of the scene with inspection and pinned it to the bottom of the screen
                new ScrollMagic.Scene({
                    triggerHook: this.triggerHook, //values from 0 to 1 (onLeave to onEnter)
                    triggerElement: triggerElem,//"#trigger", //when this gets to the middle of the window the scene is triggered (unless the offset kicks in)
                    duration: totalDuration_px, //scrolling distance (in pixels)
                    offset: this.rowHeight_px //start the scene after scrolling for that many pixels
                }).setPin(targetElem/*"#tester"*//*, {pushFollowers: false}*/).addTo(this.controller)

                var seconds_indifferent = Number.MAX_VALUE  //it is based on pixels


                var curOffset = 0

                //have the
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(firstPeriodEnergyBars[0], seconds_indifferent, {
                        css: {height: "100%"}
                    })).addTo(this.controller)


                curOffset += this.durationForEachStep_px


                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(secondPeriodEnergyBars[0], seconds_indifferent, {
                        css: {height: "100%"}
                    })).addTo(this.controller)


                curOffset += this.durationForEachStep_px

                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(thirdPeriodEnergyBars[0], seconds_indifferent, {
                        css: {height: "100%"}
                    })).addTo(this.controller)

            }
        }

//it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff

        /*events():any {
         //return super.events();    //this is undefined, lets skip it
         return {
         mouseover: "addBgColor",
         mouseout: "removeBgColor"
         }
         }*/

        /*addBgColor() {
         this.$el.css("background", "#94E4F1")
         }*/

        //this.template = _.template($("#flowerElement").html())   //1) grab template
        //defining render in marionette is optional
        //render():Marionette.ItemView<LogoModel> {
        //return super.render();
        //This is for decorating before rendering
        /*var jsonDeepCopy = JSON.parse(JSON.stringify(
         this.model.toJSON()
         ))
         jsonDeepCopy.price = jsonDeepCopy.price.toFixed(2)*/
        //in marionette this is handled automatically by default:
        //var flowerTemplate = this.template(jsonDeepCopy) //2) fill template in memory with data
        //in marionette this is handled automatically by default:
        //this.$el.html(flowerTemplate)   //3) load template in the element that we have defined (here is an <article>)
        //return this
        //}
    }
}

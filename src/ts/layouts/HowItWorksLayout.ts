/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="./HowItWorksStep1of3Layout.ts" />
    /// <reference path="./HowItWorksStep2of3Layout.ts" />
    /// <reference path="./HowItWorksStep3of3Layout.ts" />

module Pligor {

    export class HowItWorksLayout extends Marionette.LayoutView<Backbone.Model> {

        template = "script#how_it_works_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        tagName() {
            return "div"
        }

        className() {
            return "how_it_works"
        }

        constructor(options?:Backbone.ViewOptions<Backbone.Model>) {
            super(options)

            //this.template = _.template($("#flowerElement").html())   //1) grab template

            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }

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
                step1region: "article#how_it_works_step1of3",  //#header is unnecessary since it works like a jquery selector
                //(not exactly the same though because body > header is not working)
                step2region: "article#how_it_works_step2of3",
                step3region: "article#how_it_works_step3of3"
            }
        }
        step1region: Marionette.Region //to have it statically typed
        step2region: Marionette.Region //to have it statically typed
        step3region: Marionette.Region //to have it statically typed

        onRender():void {
            //super.onRender();

            this.step1region.show(new HowItWorksStep1of3Layout())   //without any model for the time being
            this.step2region.show(new HowItWorksStep2of3Layout())   //without any model for the time being
            this.step3region.show(new HowItWorksStep3of3Layout())   //without any model for the time being
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

        /*removeBgColor() {
         this.$el.css("background", "transparent")
         }*/


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

/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/LogoModel.ts" />


module Pligor {
    //ViewOptions

    export class LogoItemView extends Marionette.ItemView<LogoModel> {
        //constructor(options?:Backbone.ViewOptions<T>) { //we just choose to have it non optional for this class
        //constructor(options:Backbone.ViewOptions<T>) {
        //or even better we choose to pass the options directly in here

        template = "#logotemplate" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        /*
         tagName() {
         return "li"
         }
         */
        //TODO check if there is an excessive unnecessary div and get rid of it

        constructor(options?:Backbone.ViewOptions<LogoModel>) {
            super(options)

            //this.template = _.template($("#flowerElement").html())   //1) grab template

            /*this.model.on("change", () => {
                this.render()               //maybe we should remove this in the future, logo is not going to change
            }) //"change:price" if price is certain attribute*/
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

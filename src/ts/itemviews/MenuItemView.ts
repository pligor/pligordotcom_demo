/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />


module Pligor {

    export class MenuItemView extends Marionette.ItemView<MenuItemModel> {
        //if you have it as an attribute is not working
        tagName() {
            return "li"
        }


        template = "#menuitem_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        constructor(options?:Backbone.ViewOptions<MenuItemModel>) {
            super(options)

            //this.template = _.template($("#flowerElement").html())   //1) grab template

            /*this.model.on("change", () => {
             this.render()
             })*/
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

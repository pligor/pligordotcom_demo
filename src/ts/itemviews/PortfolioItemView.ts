/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />

module Pligor {

    export class PortfolioItemView extends Marionette.ItemView<Backbone.Model> implements ViewTraits.BindingUiElements<Backbone.Model> {

        overlayButtonMinimizeClass = "overlay_button_minimized"
        mapIsEnabledClass = "portfoliomap_enabled"

        isOverlayButtonInitiallyMinimized = false   //not minimized

        getOverlayButtonText(minimize:boolean) {
            return "Κάνε κλικ εδώ για να " + (minimize ? "απ" : "") + "ενεργοποιήσεις το χάρτη";
        }

        template = "script#portfolio_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        tagName() {
            return "div"
        }

        className() {
            return "portfolio"
        }


        ui():any {
            //return super.ui();
            return {
                overlayButton: ".overlay_button",
                map: ".portfoliomap"
            }
        }

        getUI:(arg:string) => JQuery;

        constructor(options?:Backbone.ViewOptions<Backbone.Model>) {
            super(options)

            //this.template = _.template($("#flowerElement").html())   //1) grab template

            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }

        onInitialize(options:Backbone.ViewOptions<Backbone.Model>): any {

        }

        onRender():void {
            //super.onRender();

            this.getUI("overlayButton").find("p").text(
                this.getOverlayButtonText(this.isOverlayButtonInitiallyMinimized)
            )
        }

        /*initialize(options:Backbone.ViewOptions<Backbone.Model>):void {
            super.initialize(options);

            console.log("in class")
        }*/

//it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff

        events():any {
            //return super.events();    //this is undefined, lets skip it
            return {
                "click .overlay_button": "overlayButtonClicked"
            }
        }

        overlayButtonClicked(event:Event) {
            var overlayButton = this.getUI("overlayButton")

            overlayButton.toggleClass(this.overlayButtonMinimizeClass)

            //console.log("we have been clicked")
            overlayButton.find("p").text(this.getOverlayButtonText(
                overlayButton.hasClass(this.overlayButtonMinimizeClass)
            ))

            ////////////////

            this.getUI("map").toggleClass(this.mapIsEnabledClass)
        }

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
    applyMixins(PortfolioItemView, [ViewTraits.BindingUiElements])
}

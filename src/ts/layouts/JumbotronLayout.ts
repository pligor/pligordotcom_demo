/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../itemviews/JumbotronBackgroundItemView.ts" />
/// <reference path="../traits/ViewTraits.ts" />
    /// <reference path="../typescript.ts" />

module Pligor {
    //ViewOptions

    export class JumbotronLayout extends Marionette.LayoutView<Backbone.Model> implements ViewTraits.BindingUiElements<Backbone.Model> {
        template = "script#jumbotron_template"

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
        tagName() {
            return "div"
        }

        className() {
            return "jumbotron"
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

                backgroundRegion: "div.jumbotron_background"  //#header is unnecessary since it works like a jquery selector

                //(not exactly the same though because body > header is not working)
            }
        }
        backgroundRegion: Marionette.Region //to have it statically typed

        constructor(options?:Backbone.ViewOptions<Backbone.Model>) {
            super(options);

            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }

        ui() {
            //return super.ui();
            return {
                rotatingWord: ".what_we_do_title .rotate"
            }
        }

        getUI: (arg: string) => JQuery

        onInitialize(options:Backbone.ViewOptions<Backbone.Model>) {

        }

        onRender():void {
            //super.onRender();

            this.backgroundRegion.show(new JumbotronBackgroundItemView()); //empty/no model for the time being

            var rotatingWord: any = this.getUI("rotatingWord")

            rotatingWord.textrotator({
                animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
                separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
                speed: 3000 // How many milliseconds until the next word show.
            });
        }

//it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff

        events():any {
            //return super.events();    //this is undefined, lets skip it
            return {    //skip the "on" prefix
                //mouseover: "addBgColor",
                //mouseout: "removeBgColor"
                //load: "resizeViewToFitBrowser"
            }
        }

        /*addBgColor() {
         this.$el.css("background", "#94E4F1")
         }*/

        /*removeBgColor() {
         this.$el.css("background", "transparent")
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
    applyMixins(JumbotronLayout, [ViewTraits.BindingUiElements])
}

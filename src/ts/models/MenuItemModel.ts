/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/backbone.d.ts" />
//import backbone = require("backbone") //we are NOT using external modules for now to avoid require.js
//declare var $: any; //in order for the file to compile successfully unless you include the declaration of jquery

module Pligor {
    export class MenuItemModel extends Backbone.Model {

        constructor(attributes?:any, options?:any) {
            super(attributes, options);

            this.urlRoot = "http://localhost:3000/logos"; //this.url will be http://localhost:3000/logos/<the model id>
        }

        defaults():any {
            //return super.defaults();
            return {
                menuItemTitle: "menu item title",       //"pligoropoulos",
                menuItemSubtitle: "menu item subtitle",  //"ενεργειακες λυσεις"
                menuItemTarget: "#"
            }
        }

        initialize(attributes:any, options:any):void {
            super.initialize(attributes, options);

            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))

            /*this.on("change:price", function () {    //:price makes it specific to a certain attribute
             console.log(
             "The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars"
             )
             })*/
        }
    }

    /*export interface SingleFlowerInitAttributes {
     name: string
     price: number
     color?: string
     img?: string
     link: string
     }*/
}

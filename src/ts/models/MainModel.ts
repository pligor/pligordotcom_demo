/**
 * Created by pligor on 4/20/15.
 */

    /// <reference path="../../../declarations/backbone.d.ts" />

module Pligor {
    export class MainModel extends Backbone.Model {
        defaults():any {
            //return super.defaults();  //compile error
            return {
              //breadcrumb: "/"
            }
        }

        initialize(attributes:any, options:any):void {
            super.initialize(attributes, options);

            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))
        }
    }

}

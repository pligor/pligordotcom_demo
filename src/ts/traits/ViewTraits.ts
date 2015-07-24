/**
 * Created by pligor on 5/14/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />

module ViewTraits {
    /**
     * include this in target classes: getUI: (arg) => JQuery;
     */
    export class BindingUiElements<T extends Backbone.Model> extends Marionette.View<T> {
        //ui: () => any;

        onInitialize: (options:Backbone.ViewOptions<T>) => any;

        getUI(arg: string): JQuery {
            return this.ui[arg];
        }

        /**
         * remember that this will REPLACE the initialize of the classes that is being applied upon
         * @param options
         */
        initialize(options:Backbone.ViewOptions<T>):void {
            super.initialize(options)

            this.bindUIElements()

            this.onInitialize(options)
        }
    }
}

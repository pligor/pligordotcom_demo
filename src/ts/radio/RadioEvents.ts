/**
 * Created by pligor on 5/20/15.
 */

module Pligor {

    class RadioEvent {
        //TODO implement that instead of literal objects below
    }

    export function RadioEvents() {
        return {
            routerChannel: {
                getName: function() {
                    return "routerChannel"
                },
                majorSectionWaypoint_crossed_50percent_viewport: "majorSectionWaypoint_crossed_50percent_viewport",
                fekPopupShow: "fekPopupShow"
            }
        }
    }

}

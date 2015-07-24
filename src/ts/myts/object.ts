/**
 * Created by pligor on 5/28/15.
 */

//conflicts with other libraries for unknown reason (we already tested changing the name)

/*interface Object {
    objValueArray(): any[];
}*/
//Object.prototype.objValueArray

module MyTS {
    export function getValues(obj: any):any[] {
        //var obj = this

        var keys = Object.getOwnPropertyNames(obj)
        var values:any[] = []
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]])
        }
        return values
    }
}




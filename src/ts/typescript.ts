/**
 * Created by pligor on 4/19/15.
 */

/**
 *
 * @param derivedCtor this must be a class
 * @param baseCtors WATCH OUT what you pass as a parameter here, we accept only classes
 */
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    })
}

function assert(booleanExpression:boolean, str?:string) {
    if (booleanExpression) {

    } else {
        var prefix = "assertion failed"

        throw (str === undefined ? prefix : (prefix + ": " + str))
    }
}

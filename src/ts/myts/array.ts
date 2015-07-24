/**
 * Created by pligor on 5/28/15.
 */

interface Array<T> {
    getClosestTo(num: number): number;

    distinct(): any[]

    unique(): any[]

    sum(): number
}

Array.prototype.getClosestTo = function(num: number) {
    return this.reduce((prev: number, curr: number) => {
        return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
    });
}

Array.prototype.distinct = function(): any[] {
    /*return this.reduce(function(p, c) {
     if (p.indexOf(c) < 0) p.push(c);
     return p;
     }, []);*/
    return this.filter((elem: any, index: number, arr: any[]) => {
        return arr.indexOf(elem) == index
    })
}

Array.prototype.unique = Array.prototype.distinct

Array.prototype.sum = function(): number {
    return this.reduce((n1: number, n2: number) => {
        return n1 + n2
    }, 0)
}


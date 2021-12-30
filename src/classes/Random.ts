"use strict";

/**
 * @class Random
 * @description Random class inspired by Python
 */
export class Random {
    /**
     * @param min An integer between 0 and more.
     * @param max An integer between 0 and more.
     * 
     * @returns Int
     * 
     * @description **Random integer in range [a, b], including end point.**
     */
    static randIt(min: number, max: number): number {
        if (min >= 0 && max >= 0) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            throw new Error("TypeError: randIt() missing required positional arguments: 'min' or 'max'");
        }
    }
    /**
     * @param a start point.
     * @param b end point.
     * 
     * @returns String if a === b
     * @returns Float if a !== b
     * 
     * @description **Get a random number in the range [a, b) or [a, b] depending on rounding includient end point.**
     */
    static uniform(a: number, b: number): string | number {
        if (a >= 0 && b >= 0) {
            if (a === b && b === a) return parseFloat(`${a}.0`).toFixed(1);
            else if (a > 0 && b === 0) return Math.random() * a + 1;
            else return Math.random() * (b - a + 1) + a;
        } else {
            throw new Error("TypeError: uniform() missing required positional arguments: 'a' or 'b'");
        }
    }
    /**
     * @param start start point included.
     * @param stop stop point not included.
     * @param step multiple step.
     * 
     * @returns Int
     * 
     * @description
     * **Choose a random item from the range (start, stop [, step]).**
     * 
     * **The stop argument is not included, unlike randInt ().**
     * 
     * **The optional argument step, generates a random by multiple of this one.**
     */
    static randRange(start: number, stop: number = -1, step: number = -1): number | undefined {
        if (Number.isInteger(start)) {
            if (Number.isInteger(stop)) {
                if (Number.isInteger(step)) {
                    if (stop == -1 && step == -1) return Math.floor(Math.random() * start);
                    else if (stop > 0 && step > 0) {
                        const val: number = Math.round(Math.random() * (stop + start));
                        return val % step === 0 ? val : this.randRange(start, stop, step);
                    } else if (stop > 0 && step == -1) return Math.floor(Math.random() * (stop - start) + start);
                    else if (stop === 0) throw new Error("ValueError: empty range arg2 for randRange()");
                    else if (step === 0) throw new Error("ValueError: zero step for randRange()");
                } else {
                     new Error("ValueError: non-integer arg 3 for randRange()");
                }
            } else {
                throw new Error("ValueError: non-integer arg 2 for randRange()");
            }
        } else {
            throw new Error("ValueError: non-integer arg 1 for randRange()");
        }
    }
}
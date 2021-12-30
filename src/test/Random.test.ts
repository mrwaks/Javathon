"use strict";

import { Random } from "../classes/Random.js";

describe("Test random with randIt method", () => {
    test("random between range 0 and 6 including end point.", () => {
        const min: number = 0;
        const max: number = 6;
        const randomInteger: number = Random.randIt(min, max);
        expect(randomInteger).toBeGreaterThanOrEqual(min);
        expect(randomInteger).toBeLessThanOrEqual(max);
    });
});

describe("Test float random with uniform method", () => {
    test("float random range 0 and 6 including end point.", () => {
        const a: number = 0;
        const b: number = 6;
        const randomFloat: string| number = Random.uniform(a, b);
        expect(randomFloat).toBeGreaterThanOrEqual(a);
        expect(randomFloat).toBeLessThan(b + 1);
    });

    test("If a and b argument are same, return their {values}.0", () => {
        const a: number = 6;
        const b: number = 6;
        const randomFloat: string | number = Random.uniform(a, b);
        expect(randomFloat).toBe("6.0");
    });
});

describe("Test random with randRange method", () => {
    test("random between range 0 and 7 not including end point.", () => {
        const start: number = 0;
        const stop: number = 7;
        const randomNumber: number | undefined = Random.randRange(0, 7);
        expect(randomNumber).toBeGreaterThanOrEqual(start);
        expect(randomNumber).toBeLessThan(stop);
    });

    test("random between range 0 and 101 not including end point, and step of 5", () => {
        const start: number = 0;
        const stop: number = 101;
        const step: number = 5;
        const randomNumberStepFive : number | undefined = Random.randRange(start, stop, step);
        expect(randomNumberStepFive).toBeGreaterThanOrEqual(start);
        expect(randomNumberStepFive).toBeLessThan(stop);
        expect(randomNumberStepFive as number % step).toBe(0);
    });
});
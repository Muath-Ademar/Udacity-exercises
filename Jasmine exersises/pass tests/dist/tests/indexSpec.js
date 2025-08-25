"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("../utilities/arrays.js"));
var numbers_js_1 = __importDefault(require("../utilities/numbers.js"));
var strings_js_1 = __importDefault(require("../utilities/strings.js"));
describe('arrays', function () {
    it('should add the numbers inside the array', function () {
        var result = arrays_js_1.default.addArr([1, 2, 3]);
        expect(result).toBe(6);
    });
    it('should concat 2 arrays', function () {
        var result = arrays_js_1.default.concatArr([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('should get the largest number', function () {
        var result = arrays_js_1.default.lgNum([10.3, 1999, -1999, 5]);
        expect(result).toBeTruthy();
    });
    it('should remove the last array element', function () {
        var result = arrays_js_1.default.cut3([1, 2, 3]);
        expect(result).toEqual([1, 2]);
    });
});
describe('numbers', function () {
    it('should add 2 numbers together', function () {
        var result = numbers_js_1.default.sum(12, 14);
        expect(result).toBeGreaterThan(25);
    });
    it('should multiply 2 numbers', function () {
        var result = numbers_js_1.default.multiply(5, 5);
        expect(result).toBeLessThan(26);
    });
});
describe('strings', function () {
    it('should capitalize this sentence', function () {
        var result = strings_js_1.default.capitalize('hello, my name is hulk');
        expect(result).toMatch('Hello, My Name Is Hulk');
    });
});

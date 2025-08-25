"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("./utilities/arrays.js"));
describe('arrays', function () {
    it('should add the numbers inside the array', function () {
        var result = arrays_js_1.default.addArr([1, 2, 3]);
        expect(result).toBe(6);
    });
});

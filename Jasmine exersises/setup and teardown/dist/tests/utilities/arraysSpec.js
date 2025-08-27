"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importStar(require("../../index"));
var arrays_1 = __importDefault(require("../../utilities/arrays"));
fdescribe('arrays suite', function () {
    describe('this is for creating a new array', function () {
        it('should make a new array containing dog', function () {
            expect(index_1.default(3, index_1.wordArr)).toContain('dog');
        });
        it('make a new array containing 3', function () {
            expect(index_1.default(3, index_1.wordArr)).toContain(3);
        });
    });
    describe('this is for adding numbers in an array', function () {
        it('should add numbers in array and be truthy', function () {
            expect(arrays_1.default.addArr(index_1.numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', function () {
            expect(arrays_1.default.addArr(index_1.numArr)).toBe(19);
        });
    });
    describe('this is for concatinating arrays', function () {
        it('should concatinate 2 arrays to not equal the first', function () {
            expect(arrays_1.default.concatArr(index_1.numArr, index_1.wordArr)).not.toEqual(index_1.numArr);
        });
        it('should concatinate 2 arrays to not equal the second', function () {
            expect(arrays_1.default.concatArr(index_1.numArr, index_1.wordArr)).not.toEqual(index_1.wordArr);
        });
    });
    describe('this is for removing the third index in the array', function () {
        it('should contain 3 items except rabbit', function () {
            expect(arrays_1.default.cut3(index_1.wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', function () {
            expect(arrays_1.default.cut3(index_1.wordArr)).not.toContain('rabbit');
        });
    });
    describe('this is for getting the largest number in an array', function () {
        it('should have 6 be largest number', function () {
            expect(arrays_1.default.lgNum(index_1.numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', function () {
            expect(arrays_1.default.lgNum(index_1.wordArr)).toBeFalsy();
        });
    });
});

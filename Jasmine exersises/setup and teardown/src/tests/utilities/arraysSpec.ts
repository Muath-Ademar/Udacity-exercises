import newArr, {wordArr, numArr} from '../../index'
import arrays from '../../utilities/arrays';



fdescribe('arrays suite', ()=>{
    describe('this is for creating a new array',()=>{

        it('should make a new array containing dog', () => {
            expect(newArr(3, wordArr)).toContain('dog');
        });
        it('make a new array containing 3', () => {
            expect(newArr(3, wordArr)).toContain(3);
        });
    })

    describe('this is for adding numbers in an array', ()=>{
        it('should add numbers in array and be truthy', () => {
            expect(arrays.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', () => {
            expect(arrays.addArr(numArr)).toBe(19);
        });
    })

    describe('this is for concatinating arrays',()=>{

        
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    })
        
    describe('this is for removing the third index in the array',()=>{

        it('should contain 3 items except rabbit', () => {
            expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays.cut3(wordArr)).not.toContain('rabbit');
        });
    })
    describe('this is for getting the largest number in an array',()=>{

        it('should have 6 be largest number', () => {
            expect(arrays.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays.lgNum(wordArr)).toBeFalsy();
        });
    })
})
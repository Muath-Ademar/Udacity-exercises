import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

describe('arrays', ()=>{
    it('should add the numbers inside the array', ()=>{
        const result = arrays.addArr([1,2,3])
        expect(result).toBe(6)
    });
    it('should concat 2 arrays',()=>{
        const result = arrays.concatArr([1,2,3],[4,5,6])
        expect(result).toEqual([1,2,3,4,5,6])
    })
    it('should get the largest number', () =>{
        const result = arrays.lgNum([10.3, 1999, -1999, 5])
        expect(result).toBeTruthy()
    })
    it('should remove the last array element', () =>{
        const result = arrays.cut3([1,2,3])
        expect(result).toEqual([1,2])
    })
    
})

describe('numbers', ()=>{
    it('should add 2 numbers together',()=>{
        const result = numbers.sum(12,14)
        expect(result).toBeGreaterThan(25)
    })
    it('should multiply 2 numbers', () =>{
        const result = numbers.multiply(5,5)
        expect(result).toBeLessThan(26)
    })
})

describe('strings', ()=>{
    it('should capitalize this sentence', () =>{
        const result = strings.capitalize('hello, my name is hulk')
        expect(result).toMatch('Hello, My Name Is Hulk')
    })
})
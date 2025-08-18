const util = require('./utilities/sample2')
const { lgNum, cut3 } =  require("./utilities/index2.js");


const arr = [3, 4, 9, 23]
const arr2 = [4, 7, 10, 400]
const results = util.sum(arr)

const concatResult = util.concat(arr, arr2)

const largest = lgNum(arr2)
const removeThird = cut3(arr2)

console.log(results)
console.log(concatResult)
console.log(largest)
console.log(removeThird)
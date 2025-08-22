"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concat = function (str1, str2) {
    return str1 + str2;
};
var capitalize = function (str) {
    var newStr = str
        .split(' ')
        .map(function (word) { var _a; return ((_a = word[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + word.substr(1); })
        .join(' ');
    return newStr;
};
var upperCase = function (str) {
    return str.toUpperCase();
};
var lowerCase = function (str) {
    return str.toLowerCase();
};
exports.default = {
    concat: concat,
    capitalize: capitalize,
    upperCase: upperCase,
    lowerCase: lowerCase,
};
//# sourceMappingURL=strings.js.map
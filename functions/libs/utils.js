"use strict";
exports.__esModule = true;
exports.Utils = exports.DateTZIdx = void 0;
var DateTZIdx;
(function (DateTZIdx) {
    DateTZIdx[DateTZIdx["T"] = 8] = "T";
    DateTZIdx[DateTZIdx["Z"] = 15] = "Z";
})(DateTZIdx = exports.DateTZIdx || (exports.DateTZIdx = {}));
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.parseDate = function (date) {
        var year = parseInt(date.substr(0, 4));
        var month = parseInt(date.substr(4, 2), 10) - 1;
        var day = parseInt(date.substr(6, 2));
        var hour = parseInt(date.substr(9, 2));
        var minute = parseInt(date.substr(11, 2));
        var second = parseInt(date.substr(13, 2));
        return new Date(Date.UTC(year, month, day, hour, minute, second));
    };
    Utils.validateDate = function (val) {
        if (val.length !== 16)
            return false;
        if (val[DateTZIdx.T] !== "T")
            return false;
        if (val[DateTZIdx.Z] !== "Z")
            return false;
        val
            .split("")
            .filter(function (nums, i) { return nums !== DateTZIdx[i]; })
            .every(function (num) { return !isNaN(parseInt(num)); });
        return true;
    };
    return Utils;
}());
exports.Utils = Utils;

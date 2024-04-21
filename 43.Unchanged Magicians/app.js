var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansName2 = ["Bilal", "Rafiq", "Adam", "Adil"];
var magiciansNameCopy = __spreadArray([], magiciansName2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magiciansNameCopy_1 = magiciansNameCopy; _i < magiciansNameCopy_1.length; _i++) {
        var item = magiciansNameCopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item);
    }
    ;
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello,How are you Mr.");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(magiciansName2);

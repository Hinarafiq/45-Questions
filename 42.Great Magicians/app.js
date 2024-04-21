var magiciansName = ["Bilal", "Rafiq", "Adam", "Adil"];
function show_magicians(greet) {
    for (var _i = 0, magiciansName_1 = magiciansName; _i < magiciansName_1.length; _i++) {
        var item = magiciansName_1[_i];
        console.log(greet, item);
    }
    ;
}
;
show_magicians("Hello,How are you Mr.");

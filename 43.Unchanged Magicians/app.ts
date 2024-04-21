let magiciansName2: string[] = ["Bilal","Rafiq","Adam","Adil"];

let magiciansNameCopy : string[] = [...magiciansName2];
function show_magicians(greet : string){
    let withGreetings = "";
    for(let item of magiciansNameCopy){
        withGreetings += `${greet} ${item}`;
    };

    return withGreetings;

};
let myGreetings = show_magicians("Hello,How are you Mr.");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);
console.log(magiciansName2);
let magiciansName: string[]= ["Bilal","Rafiq","Adam","Adil"];
function show_magicians(greet : string){

    for(let item of magiciansName){
        console.log(greet,item);
    };
};
show_magicians("Hello,How are you Mr.");
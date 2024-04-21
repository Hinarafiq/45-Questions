function make_album(artistName: string , albumTitle: string){
    return {artistName,albumTitle}
};
let album1 = make_album("Nusrat Fateh Ali Khan","Yeh Jo Halka Saroor Hae");
let album2 = make_album("Atif Aslam","Meri Kahani");
let album3 = make_album("Ali Zafar", "Jhoom");

console.log(album1);
console.log(album2);
console.log(album3);

function make_album2(artistName: string, albumTitle: string, numberOfTrack: number){
    return {artistName,albumTitle,numberOfTrack}
};
let album4 = make_album2("Nusrat Fateh Ali Khan","Yeh Jo Halka Saroorr Hae",16);
let album5 = make_album2("Atif Aslam", "Meri Kahani", 12);
let album6 = make_album2("Ali Zafar","Jhoom",8);

console.log(album4);
console.log(album5);
console.log(album6);

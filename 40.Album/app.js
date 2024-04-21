function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
;
var album1 = make_album("Nusrat Fateh Ali Khan", "Yeh Jo Halka Saroor Hae");
var album2 = make_album("Atif Aslam", "Meri Kahani");
var album3 = make_album("Ali Zafar", "Jhoom");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistName, albumTitle, numberOfTrack) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTrack: numberOfTrack };
}
;
var album4 = make_album2("Nusrat Fateh Ali Khan", "Yeh Jo Halka Saroorr Hae", 16);
var album5 = make_album2("Atif Aslam", "Meri Kahani", 12);
var album6 = make_album2("Ali Zafar", "Jhoom", 8);
console.log(album4);
console.log(album5);
console.log(album6);

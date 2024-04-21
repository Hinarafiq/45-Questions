"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['husna', 'zainab', 'sabina'];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friend' + guest_list[i] + ',\ni invited you on dinner tonight.\nThank You\n');
}
var not_present = 'zainab';
var new_guest = 'zohi';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friends' + guest_list[i] + ',\ni invited you on dinner tonight.\nThank You\n');
}
guest_list.unshift('fatima', 'kehkashan', 'muskan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friends' + guest_list[i] + ',\ni invited you on dinner tonight. i found a big dinner table so i invited 3 more guest\nThank You\n');
}
console.log('\nunfortunately i can not arrange big table . Only two people allow');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Friends.".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Friends' + guest_list[i] + ',\nYes you are still invited in tommorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);

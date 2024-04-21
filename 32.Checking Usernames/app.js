var current_users = ['Zainab', 'Alishba', 'Arbeen', 'Sabina', 'Husna'];
var new_users = ['Zainab', 'Zohi', 'Alishba', 'Aiman', 'Maria'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new user name."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});

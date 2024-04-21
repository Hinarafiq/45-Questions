let current_users : string [] = ['Zainab','Alishba','Arbeen','Sabina','Husna'];
let new_users: string [] = ['Zainab','Zohi','Alishba','Aiman','Maria'];
new_users.forEach((newUser) => {
    if(
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new user name.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
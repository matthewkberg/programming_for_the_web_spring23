// My three favorite games
const myFavGameOne = { 
    title: 'Stardew Valley', 
    type: 'Indie RPG', 
    numberOfPlayers: 'Single Players', 
    rating: 'E for Everyone', 
    shortDescription: 'Stardew Valley is a simulation role-playing game where players take the role of a character who inherits a dilapidated farm in a place known as Stardew Valley.'
};
console.log("Stardew Valley details", myFavGameOne);

const myFavGameTwo = { 
    title: 'Dream Daddy', 
    type: 'Dating Simulator', 
    numberOfPlayers: 'Single Players', 
    rating: 'T for Teen', 
    shortDescription: 'Dream Daddy is an adventure lifestlye simulation game where you play as a Dad and your goal is to meet and romance other hot Dads.'
};
console.log("Dream Daddy details", myFavGameTwo);

const myFavGameThree = { 
    title: 'Super Mario Odyssey', 
    type: 'Action Platformer', 
    numberOfPlayers: '1 to 2 players', 
    rating: 'E for Everyone', 
    shortDescription: 'Join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure to stop Bowser from forcing Princess Peach to marry him.'
}
console.log("Super Mario Odyssey details", myFavGameThree);

//Prompt user to select a number
const userNumber = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3, and I'll tell you about that game.");
console.log("Users number", userNumber);

// Concat alert with user selection
if (userNumber === 1){
    window.alert("You selected" + myFavGameOne.title + " which is a " + myFavGameOne.type + " for " + myFavGameOne.numberOfPlayers + " and is rated " + myFavGameOne.rating + ". " + myFavGameOne.shortDescription)
};

if (userNumber === 2){
    window.alert("You selected" + myFavGameTwo.title + " which is a " + myFavGameTwo.type + " for " + myFavGameTwo.numberOfPlayers + " and is rated " + myFavGameTwo.rating + ". " + myFavGameTwo.shortDescription)
};

if (userNumber === 3){
    window.alert("You selected" + myFavGameThree.title + " which is a " + myFavGameThree.type + " for " + myFavGameThree.numberOfPlayers + " and is rated " + myFavGameThree.rating + ". " + myFavGameOne.shortDescription)
};
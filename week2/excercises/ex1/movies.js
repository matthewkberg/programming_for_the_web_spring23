// My favorite films
const myFavs = [ 'Weekend', 'Melancholia', 'The Wizard of Oz', 'Poltergeist', 'Dan in Real Life'];
console.log("My top 5 films", myFavs);

// Prompt users to enter their favorite film
const yourFav = window.prompt("Please share your favorite film:");
console.log("Your favorite film is", yourFav)

// Adding users favorite film to my string of favorite films
myFavs.push(" & " + yourFav);
console.log("Our favorite films are", myFavs)
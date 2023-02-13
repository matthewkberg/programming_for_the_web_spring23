// Select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// Put an h1 inside of it
// Create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello world! This is a manipulation';
myEmptyDiv.appendChild(heading);
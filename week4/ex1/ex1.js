// Select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// Put an h1 inside of it
// Create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Hello world! This is a manipulation.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick(){
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'magenta';
}
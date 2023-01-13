console.log("Javascript is running!");

/* longer JS block comment */
// lil comment

/* const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to ANY element on the page - it works the same way as CSS selectors do, bc it's USING css selectors to find matching elements.

the document is the DOM - the web page and all of its elemtns

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

// step 1- make the connection to the element(s) you want to interact with
const jpgGraphic = document.querySelector("#bitmap");


function logID() {
    console.log("clicked on this element", this.id);
}

//step 2 - decide how you want the user to ineract with the object you created in step 1
jpgGraphic.addEventListener("click", logID);


//ok lets do this for the vector
const svgGraphic = document.querySelector ("#vector");

svgGraphic.addEventListener("click", logID);
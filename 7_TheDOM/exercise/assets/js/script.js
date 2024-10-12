console.log("Hello from script.js");

// What is this?
// It prints the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.
console.log(window);

// What is the difference between window and document?
// The document shows the actual HTML that makes up what you see on the page
console.log(document);

// What is the difference between document and document.documentElement?
// Document represents the whole .htm file whilst document.documentElement represents the top element (the <html> element)
console.log(window.document);
console.log(document.documentElement);

// what are the children of the body element?
// Returns the HTML elements underneath the parent node (in this case the body) in an array
console.log(document.body.children);

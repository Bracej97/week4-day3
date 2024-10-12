// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var sideBarListEl = document.querySelector(".sidebar ul");

var registerEl = document.createElement("li");
registerEl.textContent = "Register";

sideBarListEl.appendChild(registerEl);

// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?

var helpEl = document.createElement("li");
helpEl.textContent = "Help";

console.log(sideBarListEl.childNodes);

sideBarListEl.insertBefore(helpEl, sideBarListEl.childNodes[6])

//sideBarListEl.childNodes[7].insertBefore(helpEl);

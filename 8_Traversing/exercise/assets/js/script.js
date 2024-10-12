var mainContentEl = document.querySelector(".main-content");
var sideBarEl = document.querySelector(".sidebar");

var listEls = document.querySelectorAll("li");

for (let i = 0; i < listEls.length; i++) {
    listEls[i].style.color = "blue";
};

console.log(mainContentEl.childNodes)

var widgetEl = mainContentEl.childNodes[3];
console.log(widgetEl);
widgetEl.childNodes[1].textContent = "Reports";

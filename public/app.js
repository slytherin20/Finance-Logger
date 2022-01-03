"use strict";
//During development time TS does not know if there is some kind of anchor tag in the html.
//Therefore, trying to access any property of a tag will throw error.
// const anchor = document.querySelector(a)
//console.log(a.href) //throws error
//Solution:
var anchor = document.querySelector('a');
console.log(anchor.href);
var form = document.querySelector("form");
var form1 = document.querySelector(".new-item-form");
var input = document.querySelector("#type");
var amount = document.querySelector("#amount");
form1.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);
    console.log(amount.valueAsNumber);
});

import { InvoiceOne } from "./classes/invoice.js";
//During development time TS does not know if there is some kind of anchor tag in the html.
//Therefore, trying to access any property of 'a' tag will throw error.
//const anchor = document.querySelector(a)
//console.log(a.href) //throws error
//Solution:
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector("form");
const form1 = document.querySelector(".new-item-form");
const input = document.querySelector("#type");
const amount = document.querySelector("#amount");
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    console.log(amount.valueAsNumber);
});
//Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for${this.details} `;
    }
}
const inv1 = new Invoice("Mario", "for remaining bill", 2500);
const inv2 = new Invoice("Sam", "for fruits", 100);
console.log(inv1, inv2);
console.log(inv1.format());
let invoices = [];
invoices.push(inv1, inv2);
console.log(invoices);
//Another way to write class when access specifiers are present. Important: only when access specifiers are present.
const inv3 = new InvoiceOne("Sammy", "for goods", 2000);
console.log(inv3.format());
//Modules
//Typescript doesnot compile down the ES6 module system in older broswer so use newer browsers.
//To target for modern broswer: 
//In tsconfig file:
//1. module:"es2015"
//2. target:es6 //To target modern browsers.
//Interface
//TS has interfaces but JS doesnot.
//Interface allows us to enforce a certain structure to a class or an object.

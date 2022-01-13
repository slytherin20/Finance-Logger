import { InvoiceOne } from "./classes/invoice.js";
import { Payments } from "./classes/Payments.js";
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
const me = {
    name: "Sonali",
    age: 24,
    speak(text) {
        console.log(text);
    },
    spent(amount) {
        console.log(amount);
        return amount;
    }
};
console.log(me.speak("Hello world"));
//const someOne:isPerson; cam be initialized later.
let greet;
greet = (person) => {
    console.log("Hi", person.name);
};
greet(me);
//2.Interface with classes
let docOne;
let docTwo;
docOne = new Invoice("Yoshida", "Food", 10);
docTwo = new Payments("Mario", "Books", 345);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

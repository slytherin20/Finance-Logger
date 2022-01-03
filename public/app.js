"use strict";
//During development time TS does not know if there is some kind of anchor tag in the html.
//Therefore, trying to access any property of 'a' tag will throw error.
//const anchor = document.querySelector(a)
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
//Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for" + this.details + " ";
    };
    return Invoice;
}());
var inv1 = new Invoice("Mario", "for remaining bill", 2500);
var inv2 = new Invoice("Sam", "for fruits", 100);
console.log(inv1, inv2);
console.log(inv1.format());
var invoices = [];
invoices.push(inv1, inv2);
console.log(invoices);
//Another way to write class when access specifiers are present. Important: only when access specifiers are present.
var InvoiceOne = /** @class */ (function () {
    //  readonly client:string;  //Allows only read inside and outside the class.
    // private details:string;  //Allows accessing the property only inside the class.
    // public amount:number;    //Default. Allows access to property both inside and outside the class.
    function InvoiceOne(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    InvoiceOne.prototype.format = function () {
        return this.client + " owes " + this.amount + " for" + this.details + " ";
    };
    return InvoiceOne;
}());
var inv3 = new InvoiceOne("Sammy", "for goods", 2000);
console.log(inv3.format());

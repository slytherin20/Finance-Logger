import { InvoiceOne } from "./classes/invoice.js";
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
//During development time TS does not know if there is some kind of anchor tag in the html.
//Therefore, trying to access any property of 'a' tag will throw error.
//const anchor = document.querySelector(a)
//console.log(a.href) //throws error

//Solution:
const anchor = document.querySelector('a')!;
console.log(anchor.href)

const form = document.querySelector("form")!;

const form1 = document.querySelector(".new-item-form") as HTMLFormElement;

const input = document.querySelector("#type") as HTMLSelectElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

form1.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
    console.log(input.value)
    console.log(amount.valueAsNumber)
})

//Classes
class Invoice{
    readonly client:string;  //Allows only read inside and outside the class.
    private details:string;  //Allows accessing the property only inside the class.
    public amount:number;    //Default. Allows access to property both inside and outside the class.

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for${this.details} `
    }
}

const inv1 = new Invoice("Mario","for remaining bill",2500)

const inv2 = new Invoice("Sam","for fruits",100)

console.log(inv1,inv2)
console.log(inv1.format())

let invoices: Invoice[] = [];
invoices.push(inv1,inv2)

console.log(invoices)

//Another way to write class when access specifiers are present. Important: only when access specifiers are present.


const inv3 = new InvoiceOne("Sammy","for goods",2000)

console.log(inv3.format())


//Modules
//Typescript doesnot compile down the ES6 module system in older broswer so use newer browsers.
//To target for modern broswer: 
//In tsconfig file:
//1. module:"es2015"
//2. target:es6 //To target modern browsers.


//Interface
//TS has interfaces but JS doesnot.
//Interface allows us to enforce a certain structure to a class or an object.

//1.Interface with an object.
interface isPerson{
    name:string,
    age:number,
    speak(a:string):void,
    spent(a:number):number
}

const me:isPerson = {
    name:"Sonali",
    age:24,
    speak(text:string):void{
        console.log(text)
    },
    spent(amount:number):number{
        console.log(amount)
        return amount;
    }
}
console.log(me.speak("Hello world"))

//const someOne:isPerson; cam be initialized later.

let greet:(a:isPerson)=> void;

greet = (person:isPerson):void => {
    console.log("Hi",person.name)
}

greet(me)

//2.Interface with classes
let docOne:HasFormatter;
let docTwo:HasFormatter;
 docOne = new Invoice("Yoshida","Food",10);
 docTwo = new Payments("Mario","Books",345)

 let docs:HasFormatter[] = [];
 docs.push(docOne)
 docs.push(docTwo)

 console.log(docs)
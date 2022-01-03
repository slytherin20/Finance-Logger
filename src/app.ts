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

class InvoiceOne{
  //  readonly client:string;  //Allows only read inside and outside the class.
   // private details:string;  //Allows accessing the property only inside the class.
   // public amount:number;    //Default. Allows access to property both inside and outside the class.

    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){
    }

    format(){
        return `${this.client} owes ${this.amount} for${this.details} `
    }
}

const inv3 = new InvoiceOne("Sammy","for goods",2000)

console.log(inv3.format())

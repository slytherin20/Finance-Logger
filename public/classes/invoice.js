export class InvoiceOne {
    //  readonly client:string;  //Allows only read inside and outside the class.
    // private details:string;  //Allows accessing the property only inside the class.
    // public amount:number;    //Default. Allows access to property both inside and outside the class.
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for${this.details} `;
    }
}
//There are two downfalls of using module system with typescript:
//1. TS doesnot compile code for older browsers.
//2. Notice that in public folder 2 seperate js files are created instead of one. This results in
//   network calls to both the files.
// Solution for 2. is that to use webpack with TS which will compile the TS down to a single JS file
//  Hence, reducing n/w calls. 

import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payments implements HasFormatter{
      constructor(
          readonly receipant:string,
          private details:string,
          public amount:number
      ){
      }
  
      format(){
          return `${this.receipant} owed ${this.amount} for${this.details} `
      }
  }
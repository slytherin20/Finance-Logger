// TS basics
let char = "Mario";

console.log(char + 40);

char = "false" ;

const circ = (diameter: number)=>{
    return diameter * Math.PI;
}

console.log(circ(4));
 
 const rect = (a:number,b:number):number => {
     return a*b;
 }

 console.log(rect(1,2))
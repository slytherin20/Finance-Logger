//During development time TS does not know if there is some kind of anchor tag in the html.
//Therefore, trying to access any property of a tag will throw error.
// const anchor = document.querySelector(a)
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
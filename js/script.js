/* var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("gradient");

function setGradient() {
    body.style.background =
    "linear-gradient(to right,"
    +color1.value
    +", "
    +color2.value
    + ")";
    css.textContent =body.style.background +",";
}
console.log("come");
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);*/

/*
const array=[1,2,10,16];
const double =[];
const newArray = array.forEach(num=>{
    double.push(num*2);
})
console.log('forEach',double);
// map
 const mapArray = array.map(num=> num * 2)

 console.log('map',mapArray);

//  filter
const filterArray = array.filter(num => num > 5)

console.log('filter',filterArray);

// reduce
const reduceArray = array.reduce((accumulator,num) => {
    return accumulator + num;
},2);

console.log('reduce',reduceArray);*/



const name ="eben";
const age ="34";
const pet = "rat";

const ben =`Hello ${name} you seem to be ${age-10}.what a lovely ${pet} you have`;


function greet (name ='', age= 30, pet ='cat'){
   return const ben =`Hello ${name} you seem to be ${age-10}.what a lovely ${pet} you have`;
}
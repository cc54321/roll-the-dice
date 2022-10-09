/*const promt = require('promt-sync')({sigint: true});

/*

we're workong with a 6 sided die

riged side 6

1 = 1/6
2 = 1/6
3 = 1/6
4 = 1/6
5 = 1/6
6 = 1/6

roll a 7 sided die 

1-6 die
with 2 6s 7 is being treated as another 6
*/
const prompt = require('prompt-sync')({sigint: true});

let rigged = Number(prompt("Enter a side you would like to rig between 1 and 6: "))

let roll = Math.ceil(Math.random()
*7);
console.log("actual roll: " + roll);
if(roll === 7){
 console.log(rigged);   
} else {
    console.log(roll);
}





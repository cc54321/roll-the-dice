/* custom roll

custom-roll.js
Create a new file, custom-roll.js, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.
*/

const prompt = require('prompt-sync')({sigint: true});

let numberOfsides = Number(prompt("how many sides does the dice have?"))

console.log(`below is a random roll of a dice with ${numberOfsides} sides:`)
console.log(Math.ceil(Math.random()*numberOfsides))

// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

function randNum() {
    let num = Math.floor((Math.random())*10 +1);
    return num
}

function randTemp() {
    let temp = Math.floor((Math.random() + 2)*1000);
    return temp
}

let shapes = ['mug', 'plate', 'vase', 'pipe', 'coffee cup']
let pottery = [];
// Make 5 pieces of pottery at the wheel
for (const shape of shapes) {
    let clay = makePottery(shape, randNum(), randNum());
    pottery.push(clay)
}

// Fire each piece of pottery in the kiln
for (const pot of pottery) {
    let inTheKiln = firePottery(pot, randTemp())
}

console.log(pottery)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




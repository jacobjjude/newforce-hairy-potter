// Imports go first
import { makePottery } from "./PotteryWheel.js"

function randNum() {
    let num = Math.floor((Math.random())*10 +1);
    return num
}

let shapes = ['mug', 'plate', 'vase', 'pipe', 'coffee cup']
let pottery = [];
// Make 5 pieces of pottery at the wheel
for (const shape of shapes) {
    let clay = makePottery(shape, randNum(), randNum());
    pottery.push(clay)
}
console.log(pottery);

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




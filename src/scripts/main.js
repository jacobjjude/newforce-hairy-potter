// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNottoSell } from './PotteryCatalog.js';

function randNum() {
	let num = Math.floor(Math.random() * 10 + 1);
	return num;
}

function randTemp() {
	let temp = Math.floor((Math.random() + 1.7) * 1000);
	return temp;
}

let shapes = [ 'mug', 'plate', 'vase', 'pipe', 'coffee cup' ];
let pottery = [];

// Make 5 pieces of pottery at the wheel
for (const shape of shapes) {
	let clay = makePottery(shape, randNum(), randNum());
	pottery.push(clay);
}

// Fire each piece of pottery in the kiln
for (const pot of pottery) {
	let inTheKiln = firePottery(pot, randTemp());
}

// Determine which ones should be sold, and their price
for (const pot of pottery) {
	let cracked = toSellOrNottoSell(pot);
}

console.log(pottery);

// Invoke the component function that renders the HTML list

// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { PotteryList } from './PotteryList.js';

function randNum() {
	let num = Math.floor(Math.random() * 10 + 1);
	return num;
}

function randTemp() {
	let temp = Math.floor((Math.random() + 1.7) * 1000);
	return temp;
}

let shapes = [ 'Mug', 'Plate', 'Vase', 'Pipe', 'Coffee Cup' ];
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
	let cracked = toSellOrNotToSell(pot);
}

// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector('.potteryList');
parentHTMLElement.innerHTML += PotteryList();

import { usePottery } from './PotteryCatalog.js';

export const PotteryList = () => {
	let sellPots = usePottery();
	let htmlString = ``;
	for (const pot of sellPots) {
		htmlString += `
        <section class="pottery" id="potter--${pot.id}>\n
        \t<h2 class="pottery__shape">${pot.shape}</h2>\n
        \t<div class="pottery__properties">
            Item weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pot.price}
        </div>
        </section
        `;
	}
	return htmlString;
};

let sellPottery = [];

export const toSellOrNotToSell = (obj) => {
	// if (obj.weight >= 6) {
	// 	obj.price = 40;
	// } else if (obj.weight < 6) {
	// 	obj.price = 20;
	// }
	// if (!obj.cracked) {
	// 	sellPottery.push(obj);
	// }

	if (!obj.cracked) {
		if (obj.weight >= 6) {
			obj.price = 40;
		} else if (obj.weight < 6) {
			obj.price = 20;
		}
		sellPottery.push(obj);
	}

	return obj;
};

export const usePottery = () => {
	return sellPottery.map((pot) => ({ ...pot }));
};

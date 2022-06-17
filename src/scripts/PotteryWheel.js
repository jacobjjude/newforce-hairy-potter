let primaryKey = 1;

export const makePottery = (setShape, setWeight, setHeight) => {
    let pot = {
        id: primaryKey,
        shape: setShape,
        weight: setWeight,
        height: setHeight
    }
    primaryKey++;
    return pot
}

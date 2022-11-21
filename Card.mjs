export const propertySets = {
    brawn: [1, 2],
    mint: [1, 2],
    blue: [3, 8],
    skyBlue: [1, 2, 3],
    purple:[1, 2, 4],
    orange: [1, 3, 5],
    red: [2, 3, 6],
    yellow: [2, 4, 6],
    green: [2, 4, 7],
    black: [1, 2, 3, 4]
};

export class Card {
    constructor(value) {
        this.value = value;
        this.picture = undefined;
    }
}

export class MoneyCard extends Card {
    constructor(value) {
        super(value); 
    } 
}

export class ActionCard extends Card{
    constructor(value, action) {
        super(value);
        this.action = action;
    }
}

export class PropertyCard extends Card {
    constructor(value, color, name, isWild = false) {
        super(value);
        this.color = color;
        this.name = name;
        this.isWild = isWild;

        this.set = typeof(color) === "string" ? propertySets[color] : color.map(c => propertySets[c]);
    }
}

const brown = new PropertyCard(1, "brown", "Old Kent Road");
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
    constructor(value, color, name, set, isWild = false) {
        super(value);
        this.color = color;
        this.name = name;
        this.set = set;
        this.isWild = isWild;
    }
}

const brown = new PropertyCard(1, "brown", "Old Kent Road" [1, 2]);
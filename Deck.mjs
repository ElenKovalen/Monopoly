import {ActionCard, MoneyCard, PropertyCard, propertySets} from "./Card.mjs";

const deckParams = {
    moneyCards: [
        {value: 1, n: 6},
        {value: 2, n: 5},
        {value: 3, n: 3},
        {value: 4, n: 3},
        {value: 5, n: 2},
        {value: 10, n: 1},
    ],
    properties: [
        {value:1, color: "brawn", name: "brawn"},
        {value:2, color: "mint", name: "mint"},
        {value:4, color: "blue", name: "blue"},
        {value:1, color: "skyblue", name: "skyblue"},
        {value:2, color: "purple", name: "purple"},
        {value:2, color: "orange", name: "orange"},
        {value:3, color: "red", name: "red"},
        {value:3, color: "yellow", name: "yellow"},
        {value:4, color: "green", name: "green"},
        {value:2, color: "black", name: "black"},
        {value:1, color: ["brawn", "skyblue"], name: "wildProperty"},
        {value:2, color: ["black", "mint"], name: "wildProperty"},
        {value:2, color: ["purple", "orange"], name: "wildProperty"},
        {value:2, color: ["purple", "orange"], name: "wildProperty"},
        {value:3, color: ["red", "yellow"], name: "wildProperty"},
        {value:3, color: ["red", "yellow"], name: "wildProperty"},
        {value:4, color: ["black", "green"], name: "wildProperty"},
        {value:4, color: ["black", "skyBlue"], name: "wildProperty"},
        {value:4, color: ["green", "blue"], name: "wildProperty"},
        {value: Infinity, color: [], name: "wildProperty"},
        {value: Infinity, color: [], name: "wildProperty"},
    ],
    actions: [

    ],
};

export class Deck {
    constructor() {
        this.cards = [];

        deckParams.moneyCards.forEach(({value, n}) => {
            this.cards = [...this.cards, ...Array.from({length: n}, () => new MoneyCard(value))];
        });

        deckParams.properties.forEach(({value, color}) => {
            let set;
            let n;

            if (typeof(color) === "string") {
                set = propertySets[color];
                n = propertySets[color].length;
            } else {
                set = color.map(c => propertySets[c]);
                n = 1;
            }
            this.cards = [...this.cards, ...Array.from({length: n}, () => new PropertyCard(value, color, set))];
        });

        deckParams.actions.forEach(({v, n}) => {
            this.cards = [...this.cards, ...Array.from({length: n}, () => new ActionCard(v))];
        });

        console.log(this.cards);
        // for (let i = 0; i <= 6; i++) {
        //     this.cards.push(new MoneyCard(1));
        //     this.cards.push(new MoneyCard(2));
        //     this.cards.push(new MoneyCard(3));
        //     this.cards.push(new MoneyCard(4));
        //     this.cards.push(new MoneyCard(5));
            
        //     if (this.cards.filter(c = c.value == 10).length < 1) {
        //          this.cards.push(new MoneyCard(10));
        //     }

        //     if (this.cards.filter(c = c.value == 5).length < 2) {
        //         this.cards.push(new MoneyCard(5));
        //    }

        //    if (this.cards.filter(c = c.value == 4).length < 3) {
        //          this.cards.push(new MoneyCard(4));
        //     }

        //     if (this.cards.filter(c = c.value == 3).length < 3) {
        //         this.cards.push(new MoneyCard(3));
        //    }
        // }
    }

    draw() {
        const i = Math.round((this.cards.length - 1) * Math.random());
        const card = this.cards[i];
        this.cards = this.cards.filter(c => card !== c);
        return card;
    }
}

const deck = new Deck();
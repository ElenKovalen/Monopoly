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
        {value: 1, color: "brawn", name: "brawn"},
        {value: 2, color: "mint", name: "mint"},
        {value: 4, color: "blue", name: "blue"},
        {value: 1, color: "skyBlue", name: "skyblue"},
        {value: 2, color: "purple", name: "purple"},
        {value: 2, color: "orange", name: "orange"},
        {value: 3, color: "red", name: "red"},
        {value: 3, color: "yellow", name: "yellow"},
        {value: 4, color: "green", name: "green"},
        {value: 2, color: "black", name: "black"},
        {value: 1, color: ["brawn", "skyblue"], name: "wildProperty"},
        {value: 2, color: ["black", "mint"], name: "wildProperty"},
        {value: 2, color: ["purple", "orange"], name: "wildProperty"},
        {value: 2, color: ["purple", "orange"], name: "wildProperty"},
        {value: 3, color: ["red", "yellow"], name: "wildProperty"},
        {value: 3, color: ["red", "yellow"], name: "wildProperty"},
        {value: 4, color: ["black", "green"], name: "wildProperty"},
        {value: 4, color: ["black", "skyBlue"], name: "wildProperty"},
        {value: 4, color: ["green", "blue"], name: "wildProperty"},
        {value: Infinity, color: [], name: "wildProperty"},
        {value: Infinity, color: [], name: "wildProperty"},
    ],
    actions: [
        {value: 1, action: "pass and go", n: 10},
        {value: 3, action: "sly deal", n: 3},
        {value: 3, action: "forse deal", n: 3},
        {value: 5, action: "deal breaker", n: 2},
        {value: 1, action: "double the rent", n: 2},
        {value: 3, action: "debt collector 5$", n: 3},
        {value: 4, action: "hotel", n: 2},
        {value: 3, action: "house", n: 3},
        {value: 4, action: "just say no", n: 3},
        {value: 2, action: "it's your birsday", n: 3},
        {value: 3, action: "rent colors", n: 3},

        {value: 1, action: "rent", color: ["red", "yellow"], n: 2},
        {value: 1, action: "rent", color: ["black", "mint"], n: 2},
        {value: 1, action: "rent", color: ["brawn", "skyBlue"], n: 2},
        {value: 1, action: "rent", color: ["purple", "orange"], n: 2},
        {value: 1, action: "rent", color: ["green", "blue"], n: 2},
    ],
};

export class Deck {
    constructor() {
        this.cards = [];

        deckParams.moneyCards.forEach(({value, n}) => {
            this.cards = [...this.cards, ...Array.from({length: n}, () => new MoneyCard(value))];
        });

        deckParams.properties.forEach(({value, color}) => {
            const n = typeof(color) === "string" ? propertySets[color].length : 1;
            this.cards = [...this.cards, ...Array.from({length: n}, () => new PropertyCard(value, color))];
        });

        deckParams.actions.forEach(({value, action, }) => {
            this.cards = [...this.cards, ...Array.from({length: n}, () => new ActionCard(value, action))];
        });
    }

    drawCard() {
        const i = Math.round((this.cards.length - 1) * Math.random());
        const card = this.cards[i];
        this.cards = this.cards.filter(c => card !== c);
        return card;
    }
}

const deck = new Deck();
import {Card, MoneyCard} from "./Card.mjs";

const deckParams = {
    moneyCards: [[1,6],[2,5],[3,3],[4,3],[5,2],[10,1]],
}

export class Deck {
    constructor() {
        this.cards = [];

        for (let i = 0; i <= 6; i++) {
            this.cards.push(new MoneyCard(1));
            this.cards.push(new MoneyCard(2));
            this.cards.push(new MoneyCard(3));
            this.cards.push(new MoneyCard(4));
            this.cards.push(new MoneyCard(5));
            
            if (this.cards.filter(c = c.value == 10).length < 1) {
                 this.cards.push(new MoneyCard(10));
            }

            if (this.cards.filter(c = c.value == 5).length < 2) {
                this.cards.push(new MoneyCard(5));
           }

           if (this.cards.filter(c = c.value == 4).length < 3) {
                 this.cards.push(new MoneyCard(4));
            }

            if (this.cards.filter(c = c.value == 3).length < 3) {
                this.cards.push(new MoneyCard(3));
           }
        }
    }

    draw() {
        const i = Math.round((this.cards.length - 1) * Math.random());
        const card = this.cards[i];
        this.cards = this.cards.filter(c => card !== c);
        return card;
    }
}
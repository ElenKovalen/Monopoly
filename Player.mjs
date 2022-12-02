export class Player {
    constructor(id){
       this.id = id;
       this.poketCards = [];
       this.tableCards = [];
    }

    get bestCard() {
        return this.poketCards.reduce((prev, current) => prev.value < current.value ? current : prev);
    }

    play() {
        const nCards = Math.round(Math.random() * 3);
        for (i = 0; i < nCards; i++) {
            this.tableCards.push(this.poketCards.pop());
        }
    }
}
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
        this.tableCards.push(this.poketCards.pop());
    }
}
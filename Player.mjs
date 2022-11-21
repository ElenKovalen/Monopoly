export class Player {
    constructor(id){
       this.id = id;
    }

    get bestCard() {
        return this.cards.reduce((prev, current) => prev.value < current.value ? current : prev);
    }
}
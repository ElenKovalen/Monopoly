import { Player } from "./Player.mjs";
import { Deck } from "./Deck.mjs";

class Game {
    constructor(nPlayers) {
        this.deck = new Deck();
        this.players = [];
              
        for (let i = 0; i < nPlayers; i++) {
           const player = new Player(i); 
           this.players.push(player);
        }     
    }

    deal() {
        this.players.forEach(p => {
            p.cards = []; 
            for (let i = 0; i < 5; i++) {
               p.cards.push(this.deck.draw());
            }
        }); 
    }

    judge() {
        return this.players.reduce((prev, current) => prev.bestCard.value > current.bestCard.value ? prev : current);
    }

    printResults(winner) {
        console.log(winner);
    }

    play() {
        this.deal();
        this.judge();
        this.printResults(this.judge());
    }
}

new Game(4).play();
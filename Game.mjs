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
            for (let i = 0; i < 5; i++) {
               p.poketCards.push(this.deck.draw());
            }
        }); 
    }

    judge() {
        return this.players.reduce((prev, current) => prev.tableCards[0].value > current.tableCards[0].value ? prev : current);
    }

    printResults(winner) {
        console.log(winner);
    }

    play() {
        this.deal();
        this.players.forEach(p => p.play());
        this.judge();
        this.printResults(this.judge());
    }
}

new Game(4).play();
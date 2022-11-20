import { Player } from "./Player.mjs";
import { Deck } from "./Deck.mjs";

class Game {
    constructor(nCards, nPlayers) {
        this.deck = new Deck(nCards);
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
        let winner = this.players[0]; 
        this.players.forEach(p => {
            if (winner.cards[0].rank < p.cards[0].rank) {
                winner = p;
            }
        });
        return winner;
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

new Game(40, 4).play();
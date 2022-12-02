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
               p.poketCards.push(this.deck.drawCard());
            }
        }); 
    }

    judge() {
        return this.players.reduce((prev, current) => prev.tableCards[0].value > current.tableCards[0].value ? prev : current);
    }

    printResults(winner) {
        console.log(winner);
    }

    run() {
        this.deal();
        let isFirst = true;

        for(const p of players) {
            if (!isFirst) {
                this.dealTwoCardsToPlayer(p);
            }
            p.play();
            const winner = this.judge();
            if (winner) {
                this.printResults(winner);
                break;
            }
            
            isFirst = false;
        }
    }
}

new Game(4).run();

// const arr = [0, 1, 2];

// for (let i = 0; i < arr.length; i++) {
//     // arr[i]
// }

// let ii = 0;
// for (const e of arr) {
//     // e
//     // my logic
//     ii++;
// }

// let iii = 0;
// while(iii < arr.length) {
//     // arr[i]
//     iii++;
// }
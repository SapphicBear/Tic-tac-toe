// Game logic
// Track score of each player. Once a player gets 3 in a row, they win and are announced.


const gameBoard = {
        board: ["", "", "", "", "", "", "", "", ""],
        winConditions: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        round: 0,
        maxRound: 3,
        winner: "",
        running: false,
        humanTurn: false,
        cpuTurn: false,
        humanWins: 0,
        cpuWins: 0,

        getStartingPlayer() {
            let humanChance = Math.floor(Math.random() * 6);
            console.log(humanChance);
            let cpuChance = Math.floor(Math.random() * 6);
            console.log(cpuChance);
            if (humanChance > cpuChance) {
                this.humanTurn = true;
                this.cpuTurn = false;
                console.log("You go first!");
            } else if (humanChance < cpuChance) {
                this.humanTurn = false;
                this.cpuTurn = true;
                console.log("computer goes first!");
            } else {
                this.humanTurn = true;
                this.cpuTurn = false;
                console.log("Tie, you go first!");
            }

        },

        startGame() {
            this.board = ["", "", "", "", "", "", "", "", ""];
            this.running = true;
            this.getStartingPlayer();
            this.winner = "";
            this.round = 0;
            this.humanWins = 0;
            this.cpuWins = 0;
        },
        nextRound() {
            this.board = ["", "", "", "", "", "", "", "", ""];
            this.running = true;
            this.getStartingPlayer();
            this.winner = "";
           },

        computerMove(player, DOM) {
            if (this.cpuTurn == true && this.running == true && this.board.includes("")) {
                let moveChance = true;
                while (moveChance == true) {
                    let num = Math.floor(Math.random() * this.board.length);
                    console.log(num);
                        if (this.board[num] === "") {
                            this.board[num] = player.computerPlayer.tile;
                            DOM.tiles[num].textContent = player.computerPlayer.tile;
                            moveChance = false;
                        }
                }
            } else {
                return false;
            }
        },
        endTurn() {
            if (this.cpuTurn == true && this.humanTurn == false) {
                this.cpuTurn = false;
                this.humanTurn = true;
            } else if (this.cpuTurn == false && this.humanTurn == true) {
                this.cpuTurn = true;
                this.humanTurn = false;
            } else {
                throw new Error("Something went wrong with the endturn function!");
            }
        },

        checkWinner(player) {
            let roundWon = false;
            for (let i = 0; i < this.winConditions.length; i++) {
                const conditions = this.winConditions[i];
                const squareA = this.board[conditions[0]];
                const squareB = this.board[conditions[1]];
                const squareC = this.board[conditions[2]];

                if (squareA === "" || squareB === "" || squareC === "") {
                    continue;
                }
                
                if (squareA == squareB && squareB == squareC) {
                    roundWon = true;
                    if (squareA == player.humanPlayer.tile) {
                    this.winner = player.humanPlayer.name;
                    this.humanWins++;
                }   else if (squareA == player.computerPlayer.tile) {
                    this.winner = player.computerPlayer.name;
                    this.cpuWins++;
                    break;
            } 
    }
}
    if (roundWon) {
                
                console.log(`${this.winner} wins!`);
                this.round++;
                this.running = false;
            } else if (!this.board.includes("")) {
                this.winner = "draw";
                this.cpuWins++;
                this.humanWins++;
                this.round++;
                this.running = false;
            }
}
};

    export { gameBoard };



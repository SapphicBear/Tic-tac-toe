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
        tiles: ["X", "O"],
        round: 0,
        xWins: 0,
        oWins: 0,
        winner: "",
        running: false,

        startGame() {
            this.running = true;
            this.winner = "";
            this.xWins = 0;
            this.oWins = 0;
            this.round = 0;
        },
        restartGame() {
            this.board = ["", "", "", "", "", "", "", "", ""];
            running = true;
        },

        playRound(humanTurn, cpuTurn) {
            while (this.running === true) {
                humanTurn;
                cpuTurn;
                this.checkWinner();
            } 
        },

        checkWinner() {
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
                    break;
                }
            }
            if (roundWon) {
                console.log(`${this.winner} wins!`);
                this.running = false;
            }
            
        }
};

    export { gameBoard };



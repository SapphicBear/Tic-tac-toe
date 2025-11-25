// Game logic
// Track score of each player. Once a player gets 3 in a row, they win and are announced.

const gameBoard = {
        board: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ],
        tiles: ["X", "O"],
        round: 0,
        xWins: 0,
        oWins: 0,


        checkBoard() {
            let xCount = 0;
            let oCount = 0;
            for (let col = 0; col < this.board.length; col++) {
                for (let row = 0; row < this.board[col].length; row++) {
                    if (this.board[col][row] === "X") {
                        xCount++;

                        if (xCount === 3) {
                        console.log("X wins!");
                        xWins += 1;
                        return true;
                    }
                    } else if (this.board[col][row] === "O") {
                        oCount++;

                        if (oCount === 3) {
                        console.log("O Wins!");
                        oWins += 1;
                        return true;
                    }
                }
            }
        }
            return false;
        },

        playRound(humanTurn, cpuTurn) {
            if (this.round === 3) {
                console.log("New game start!");
                this.xWins = 0;
                this.oWins = 0;
                this.round = 0;
            }
            humanTurn;
            cpuTurn;
            this.checkBoard();
            if (this.checkBoard === true) {
                this.round++;
            }
        }
    };

    export { gameBoard };



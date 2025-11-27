
function Player(name, tile) {
    this.name = name;
    this.tile = tile;
    this.checkTile = function (humanTile) {
        if (humanTile === "X" || humanTile === "x") {
        this.tile = "O";
        } else {
        this.tile = "X";
            }
        };
    this.markSquare = function (array, square) {
            array[square] = this.tile;
        };
    };
Player.prototype.humanMove = function (array) {
    let square = prompt("Choose where to mark!", "");
    this.markSquare(array, square);
}

Player.prototype.computerMove = function (array) {
            let moveChance = true;
            let i = 0;
            while(moveChance === true || i === 20) {
                let row = Math.floor(Math.random() * 3);
                console.log(row);
                let col = Math.floor(Math.random() * 3);
                console.log(col);
                if (array[row][col] === "") {
                    array[row][col] = this.tile;
                    moveChance = false;
                } else {
                    i++;
                    console.log(i);
                }
            }
        };
        let humanPlayer;
        let computerPlayer;
function createPlayers() {
        humanPlayer = new Player(prompt("Please enter your name:", ""), prompt("Do you want Xs or Os?", ""));
        computerPlayer = new Player("CPU");
        computerPlayer.checkTile(humanPlayer.tile);
    };

export { createPlayers, humanPlayer, computerPlayer };

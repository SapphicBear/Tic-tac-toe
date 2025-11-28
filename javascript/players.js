
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
Player.prototype.humanMove = function (array, square) {
    
        array[square] = this.tile;
}

Player.prototype.computerMove = function (array) {
            let moveChance = true;
            let i = 0;
            while(moveChance === true || i === 20) {
                let row = Math.floor(Math.random() * array.length);
                console.log(row);
                if (array[row] === "") {
                    array[row] = this.tile;
                    moveChance = false;
                    break;
                } else {
                    i++;
                }
            }
        };
        let humanPlayer;
        let computerPlayer;
function createPlayers() {
        humanPlayer = new Player(prompt("Please enter your name:", ""), prompt("Do you want Xs or Os?", ""));
        computerPlayer = new Player("CPU");
        computerPlayer.checkTile(humanPlayer.tile);
        console.log(humanPlayer.tile);
        console.log(computerPlayer.tile);
    };

export { createPlayers, humanPlayer, computerPlayer };

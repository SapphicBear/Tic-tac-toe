// New game button press will call functions from the "game" object
// Reset will do the same!, make handlers that handle those calls!

function newGame(player, game, DOM) {
    DOM.tiles.forEach((tile) => {
        tile.textContent = "";
    });
    player.createPlayers();
    game.gameBoard.restartGame();
    gameHandler(player, game, DOM);
}

function resetGame(DOM, game, player) {
    player.createPlayers();
    DOM.tiles.forEach((tile) => {
        tile.textContent = "";
    });
    game.gameBoard.restartGame();
    gameHandler(player, game, DOM);
}

function squareHandler(item, player, game, DOM) { 
    if (!player.humanPlayer) {
        alert("Please make a character!"); }

    else if (game.gameBoard.running == true) {
        if (DOM.tiles[item.classList[1]].textContent !== "") {
            alert("Square already filled!");
        }
        DOM.tiles[item.classList[1]].textContent = player.humanPlayer.tile;
        game.gameBoard.board[item.classList[1]] = player.humanPlayer.tile;    
        game.gameBoard.humanTurn = false;
        game.gameBoard.cpuTurn = true;
        }
        gameHandler(player, game, DOM);
    }
function gameHandler(player, game, DOM) {
    if (game.gameBoard.running == false) {
        console.log("Game Over!");
    }
    if (game.gameBoard.cpuTurn == true) {
        game.gameBoard.computerMove(player, DOM);
        game.gameBoard.cpuTurn = false;
        game.gameBoard.humanTurn = true;
    }
    game.gameBoard.checkWinner(player);
}

export { newGame, squareHandler, resetGame, gameHandler };
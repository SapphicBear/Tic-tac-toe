// New game button press will call functions from the "game" object
// Reset will do the same!, make handlers that handle those calls!

function newGame(player, game) {
    player.createPlayers();
    game.startGame();
}

function resetGame(game) {
    game.restartGame();
}

function squareHandler(player, array, square) {
    if (!player.humanPlayer) {
        console.log("No character!");
    } else {

    } player.humanPlayer.humanMove(array.gameBoard.board, square);
    
}

export { newGame, squareHandler, resetGame };
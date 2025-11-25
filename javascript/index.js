import * as combine from "./combine.js";



// Init
(function () {
    const DOM = combine.DOM.cacheDOM();
    // combine.listener.newButton(DOM, combine.handler.newGame().addScore);
    // combine.listener.resetButton(DOM, combine.handler.newGame().subScore);

    // game-area
    console.log(combine.game.gameBoard.board);
    combine.player.createPlayers();
    combine.game.gameBoard.playRound(combine.player.humanPlayer.humanMove(combine.game.gameBoard.board), combine.player.computerPlayer.computerMove(combine.game.gameBoard.board));
    console.log(combine.game.gameBoard.board);

    
})();



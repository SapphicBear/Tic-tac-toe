import * as com from "./combine.js";
import { squareHandler } from "./handler.js";



// Init
(function () {
    const DOM = com.DOM.cacheDOM();

    // Buttons listener

    com.listener.newButton(DOM, function () {
        com.hand.newGame(com.player, com.game.gameBoard);
});
    com.listener.resetButton(DOM, function () {
        com.hand.resetGame(com.game.gameBoard);
    });
    // Square listener!
    com.listener.squares(DOM, function () {
        com.hand.squareHandler(com.player, com.game);
});

    // game-area
   

    
})();



import * as com from "./combine.js";



// Init
(function () {
    const DOM = com.DOM.cacheDOM();
    com.hand.gameHandler(com.player, com.game, DOM);
    // Buttons listener

    com.listener.newButton(DOM);
    com.listener.dialogCancelButton(DOM, function () {
        com.hand.dialogCancel(DOM);
    });
    com.listener.dialogStartButton(DOM, function () {
        com.hand.newGame(com.player, com.game, DOM);
    });
    com.listener.nextRoundButton(DOM, function () {
        com.hand.nextRoundHandler(DOM, com.game, com.player);
    });
    // Square listener!
    com.listener.squares(DOM, com.game, com.player, com.hand.squareHandler);

    // game-area
    
    
})();



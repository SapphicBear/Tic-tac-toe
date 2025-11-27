import * as com from "./combine.js";



// Init
(function () {
    const DOM = com.DOM.cacheDOM();

    // Buttons listener
    com.listener.newButton(DOM, () => {
        console.log("New button!");
    });
    com.listener.resetButton(DOM, () => {
        console.log("Reset Button!");
    })
    // Square listener!
    com.listener.squares(DOM, () => {
        console.log("Click!");
    })

    // game-area
   

    
})();



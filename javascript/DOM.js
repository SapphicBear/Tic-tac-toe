function cacheDOM() {
    const DOM = [];
    DOM.header = document.querySelector(".head");
    DOM.newGameButton = document.querySelector("#new-game");
    DOM.nextRoundButton = document.querySelector("#next-round");
    DOM.container = document.querySelector(".container");
    DOM.squares = document.querySelectorAll(".square");
    DOM.tiles = document.querySelectorAll(".tile");
    DOM.info = document.querySelector(".game-info");
    DOM.dialog = document.querySelector("dialog");
    DOM.name = document.querySelector("#username");
    DOM.dialog.start = document.querySelector("dialog .start-button");
    DOM.dialog.cancel = document.querySelector("dialog .cancel-button");
    console.log("DOM-Cached!")
    return DOM;
};

export { cacheDOM };
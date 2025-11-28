function cacheDOM() {
    const DOM = [];
    DOM.header = document.querySelector(".head");
    DOM.newGameButton = document.querySelector("#new-game");
    DOM.resetButton = document.querySelector("#reset");
    DOM.container = document.querySelector(".container");
    DOM.squares = document.querySelectorAll(".square");
    DOM.tiles = document.querySelectorAll(".tile");
    console.log("DOM-Cached!")
    return DOM;
};

export { cacheDOM };
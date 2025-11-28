function newButton(DOM, handler) {
    DOM.newGameButton.addEventListener("click", handler);
}

function resetButton(DOM, handler) {
    DOM.resetButton.addEventListener("click", handler)
}

function squares(DOM, game, player, handler) {
    DOM.squares.forEach((item) => {
        item.addEventListener("click", function () {
            handler(item, player, game, DOM);
        });
    });
};

export { newButton, resetButton, squares };
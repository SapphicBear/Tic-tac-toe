function newButton(DOM, handler) {
    DOM.newGameButton.addEventListener("click", handler);
    
}

function resetButton(DOM, handler) {
    DOM.resetButton.addEventListener("click", handler);
}

function squares(DOM, handler) {
    DOM.squares.forEach((item) => {
        item.addEventListener("click", handler);
    })
}

export { newButton, resetButton, squares };
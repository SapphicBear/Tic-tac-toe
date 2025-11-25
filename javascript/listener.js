function newButton(DOM, handler) {
    DOM.newGameButton.addEventListener("click", handler);
    
}

function resetButton(DOM, handler) {
    DOM.resetButton.addEventListener("click", handler);
}

export { newButton, resetButton };
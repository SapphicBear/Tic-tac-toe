function newButton(DOM) {
    DOM.newGameButton.addEventListener("click", function () {
        DOM.dialog.showModal();
    });
}

function dialogStartButton(DOM, handler) {
    DOM.dialog.start.addEventListener("click", handler);
}

function dialogCancelButton(DOM, handler) {
    DOM.dialog.cancel.addEventListener("click", handler);
}


function nextRoundButton(DOM, handler) {
    DOM.nextRoundButton.addEventListener("click", handler)
}

function squares(DOM, game, player, handler) {
    DOM.squares.forEach((item) => {
        item.addEventListener("click", function () {
            handler(item, player, game, DOM);
        });
    });
};

export { newButton, nextRoundButton, squares, dialogStartButton, dialogCancelButton };
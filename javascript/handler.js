// New game button press will call functions from the "game" object
// Reset will do the same!, make handlers that handle those calls!

function newGame(player, game, DOM) {
    DOM.tiles.forEach((tile) => {
        tile.textContent = "";
    });
    player.createPlayers(DOM.name.value, prompt("X or O?", ""));
    if (player.humanPlayer.name === "" || player.humanPlayer.name === undefined || player.humanPlayer.name === null) {
        throw new Error(alert("No name selected! Canceling game!"));
    } else {
        DOM.dialog.close();
        game.gameBoard.startGame();
        DOM.info.textContent = "Game start!";
        gameHandler(player, game, DOM);
    }
}

function nextRoundHandler(DOM, game, player) {
    if (game.gameBoard.running == false && game.gameBoard.round !== game.gameBoard.maxRound && player.humanPlayer) {
        DOM.info.textContent = "Next Round!";
        DOM.tiles.forEach((tile) => {
        tile.textContent = "";
    });
        game.gameBoard.nextRound();
        gameHandler(player, game, DOM);
    } else if (!player.humanPlayer) {
        DOM.info.textContent = "Please start a game before going on to the next round!";
        throw new Error("no player");
    } else if (game.gameBoard.running == false && game.gameBoard.round === game.gameBoard.maxRound) {
        DOM.info.textContent = "Game over! Please Start a new game!";
    } else if (game.gameBoard.running == true && game.gameBoard.round !== game.gameBoard.maxRound) {
        DOM.info.textContent = "Please finish current round before continuing!";
    }
}

function squareHandler(item, player, game, DOM) { 
    if (!player.humanPlayer || game.gameBoard.running == false) {
        DOM.info.textContent = "Please start a game first!"; }

    else if (game.gameBoard.round === game.gameBoard.maxRound) {
        DOM.info.textContent = "Game over! Please make a new game!";
    }
    else if (game.gameBoard.running == true) {
        if (DOM.tiles[item.classList[1]].textContent !== "") {
            DOM.info.textContent = "Square already chosen! Choose another!";
            return;
        }
        DOM.info.textContent = "Running...";
        DOM.tiles[item.classList[1]].textContent = player.humanPlayer.tile;
        game.gameBoard.board[item.classList[1]] = player.humanPlayer.tile;    
        game.gameBoard.humanTurn = false;
        game.gameBoard.cpuTurn = true;
        gameHandler(player, game, DOM);    
    }
    }
function gameHandler(player, game, DOM) {
    if (game.gameBoard.running == false && game.gameBoard.winner === "") {
        DOM.info.textContent = "Start a new game!";
    }
    if (game.gameBoard.cpuTurn == true) {
        game.gameBoard.computerMove(player, DOM);
        game.gameBoard.cpuTurn = false;
        game.gameBoard.humanTurn = true;
    } 
    game.gameBoard.checkWinner(player);
    if (game.gameBoard.winner !== "") {
        if (game.gameBoard.round >= game.gameBoard.maxRound) {
            if (game.gameBoard.humanWins > game.gameBoard.cpuWins) {
                DOM.info.textContent = `Congragulations ${player.humanPlayer.name}, you win! Final Score: ${game.gameBoard.humanWins} to ${game.gameBoard.cpuWins}!`
            } else if (game.gameBoard.humanWins < game.gameBoard.cpuWins) {
                DOM.info.textContent = `${player.computerPlayer.name} wins! Final Score: ${game.gameBoard.cpuWins} to ${game.gameBoard.humanWins}!`
            } else {
                DOM.info.textContent = `Game Over! It's a draw! ${game.gameBoard.humanWins} to ${game.gameBoard.cpuWins}!`
            }
        } else {
            if (game.gameBoard.winner === "draw") {
                DOM.info.textContent = "Round Over! It's a draw! Both players get 1 point! Click next round button to continue!";
            } else {
                DOM.info.textContent = `Round Over! ${game.gameBoard.winner} Wins! ${game.gameBoard.round} out of ${game.gameBoard.maxRound}! Click Next Round Button!`;
            }
        }
    }
}
function dialogCancel(DOM) {
    DOM.name.value = "";
    DOM.dialog.close();
}

export { newGame, squareHandler, nextRoundHandler, gameHandler, dialogCancel };
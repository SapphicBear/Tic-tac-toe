function newGame() {
    let score = 0;
    const addScore = function() {
        score += 1;
        console.log(score);
    }
    const subScore = function() {
        score -= 1;
    }
    return { addScore, subScore };
}

function playGame() {
    
}

export { newGame, playGame };
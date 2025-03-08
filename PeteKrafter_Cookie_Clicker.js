var score = 0;
var power = 1;

function cookieClicked() {
    score += power;
    updateScore;
}

function updateScore() {
    document.getElementById("scoreValue").innerText = score;
}

const p1DisplayScore = document.querySelector('#p1DisplayScore');
const p2DisplayScore = document.querySelector('#p2DisplayScore');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let winningScoreSelect = document.querySelector('#playto');



one_score = 0;
two_score = 0;
let winningScore = 3;
let isGameOver = false;


player1.addEventListener('click', function () {
    if (!isGameOver) {
        one_score += 1
    }
    if (one_score === winningScore) {
        isGameOver = true
        p1DisplayScore.classList.add('has-text-success');
        p2DisplayScore.classList.add('has-text-danger');
    }
    p1DisplayScore.textContent = one_score;

})


player2.addEventListener('click', function () {
    if (!isGameOver) {
        two_score += 1;
    }
    if (two_score === winningScore) {
        isGameOver = true;
        p2DisplayScore.classList.add('has-text-success');
        p1DisplayScore.classList.add('has-text-danger');
    }
    p2DisplayScore.textContent = two_score;

})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

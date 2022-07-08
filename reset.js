
const resetButton = document.querySelector('#reset');

function reset() {
    isGameOver = false
    one_score = 0;
    two_score = 0;
    p1DisplayScore.textContent = one_score;
    p2DisplayScore.textContent = two_score
    p1DisplayScore.classList.remove('has-text-success', 'has-text-danger');
    p2DisplayScore.classList.remove('has-text-success', 'has-text-danger');
}


resetButton.addEventListener('click', reset)




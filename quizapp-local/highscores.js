const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

if(highScores != []) {
highScoresList.innerHTML = highScores
    .map( score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join("");
} else {
    highScoresList.innerHTML = `<li class="high-score">There is no score yet.</li>`;
    
}
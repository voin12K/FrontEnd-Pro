const smileys = ['😊', '😄', '😍', '🥳', '😎'];
const votes = Array(smileys.length).fill(0);

const smileysContainer = document.getElementById('smileys-container');
const votesContainer = document.getElementById('votes-container');

smileys.forEach((smiley, index) => {
    const smileyDiv = document.createElement('div');
    smileyDiv.className = 'smiley';
    smileyDiv.textContent = smiley;

    smileyDiv.addEventListener('click', () => {
        votes[index]++;
        updateVotes();
    });

    smileysContainer.appendChild(smileyDiv);
});

function updateVotes() {
    votesContainer.innerHTML = '';

    votes.forEach((count, index) => {
        const voteDiv = document.createElement('div');
        voteDiv.textContent = `Голосів за ${smileys[index]}: ${count}`;
        votesContainer.appendChild(voteDiv);
    });
}

updateVotes();

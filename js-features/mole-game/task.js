const holes = [];
for (let i = 1; i <= 9; i++) {
  holes.push(document.getElementById(`hole${i}`));
}

function getHole(index) {
  return holes[index - 1];
}

const killsElement = document.getElementById('killsCount');
const missesElement = document.getElementById('missesCount');

let kills = 0;
let misses = 0;
let moleIndex = null;

function showMole() {
  if (moleIndex !== null) {
    getHole(moleIndex).classList.remove('hole_has-mole');
  }
  moleIndex = Math.floor(Math.random() * 9) + 1;
  getHole(moleIndex).classList.add('hole_has-mole');
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      kills++;
      killsElement.textContent = kills;
      hole.classList.remove('hole_has-mole');
    } else {
      misses++;
      missesElement.textContent = misses;
    }

    if (kills >= 10) {
      alert('Вы выиграли игру!');
      kills = 0;
      misses = 0;
      killsElement.textContent = kills;
      missesElement.textContent = misses;
      holes.forEach(h => h.classList.remove('hole_has-mole'));
    }

    if (misses >= 5) {
      alert('Вы проиграли игру!');
      kills = 0;
      misses = 0;
      killsElement.textContent = kills;
      missesElement.textContent = misses;
      holes.forEach(h => h.classList.remove('hole_has-mole'));
    }
  });
});
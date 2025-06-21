const btn = document.getElementById('kissBtn');
const message = document.getElementById('kissMessage');
const music = document.getElementById('musica');

btn.addEventListener('click', () => {
  message.classList.remove('hidden');
  music.play();
});

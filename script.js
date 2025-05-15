const codeBlock = document.getElementById('codeBlock');

let position = 0;
let speed = 2;

function dropBlock() {
  position += speed;
  codeBlock.style.top = position + 'px';

  if (position > window.innerHeight - 100) {
    position = 0;
    randomizeBlock();
  }

  requestAnimationFrame(dropBlock);
}

function randomizeBlock() {
  const blocks = ['1', '2', '3'];
  const random = blocks[Math.floor(Math.random() * blocks.length)];
  codeBlock.innerText = random;
}


document.addEventListener('keydown', (e) => {
  const current = codeBlock.innerText;
  if ((current === '1' && e.key === '1') ||
      (current === '2' && e.key === '2') ||
      (current === '3' && e.key === '3')) {
    position = 0;
    randomizeBlock();
  }
});

dropBlock()
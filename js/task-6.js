function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
const colors = [
  '#f4f2f3',
  '#fbe0c3',
  '#344648',
  '#d05663',
  '#888870',
  '#f6f4e8',
  '#ded369',
  '#647295',
  '#ffa101',
  '#b3deeb',
  '#788402',
  '#8ca9d3',
];

function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function getColor() {
  const index = randomNum(0, colors.length - 1);
  return colors[index];
}

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

container.appendChild(wrapper);

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Background color: #ffffff';

wrapper.appendChild(content);

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Change color';

button.addEventListener('click', () => {
  const color = getColor();
  container.style.backgroundColor = color;
  content.textContent = `Background color: ${color}`;
});

wrapper.appendChild(button);

'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', function (e) {
  const wallDimentions = wall.getBoundingClientRect();

  let x = e.clientX - wallDimentions.left - 35;
  let y = e.clientY - wallDimentions.top - 35;

  const maxX = Math.min(350, wallDimentions.width - spider.offsetWidth);
  const maxY = Math.min(350, wallDimentions.height - spider.offsetHeight);

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  spider.style.transform = `translate(${x}px, ${y}px)`;
});

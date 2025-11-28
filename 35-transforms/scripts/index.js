const cube = document.getElementById('cube');

let rotateX = -20;
let rotateY = -20;

let dragging = false;
let prevX, prevY;

document.querySelector('.scene').addEventListener('mousedown', e => {
  dragging = true;
  prevX = e.clientX;
  prevY = e.clientY;
});

document.addEventListener('mouseup', () => dragging = false);

document.addEventListener('mousemove', e => {
  if (!dragging) return;

  let deltaX = e.clientX - prevX;
  let deltaY = e.clientY - prevY;

  rotateY += deltaX * 0.5;
  rotateX -= deltaY * 0.5;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  prevX = e.clientX;
  prevY = e.clientY;
});

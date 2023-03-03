let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
alert(a + b);

alert((1.35).toFixed(1)); // 1.4
alert((6.35).toFixed(1)); // 6.3
alert(Math.round(6.35 * 10) / 10); // 6.4

function readNumber() {
  let num;
  do {
    num = prompt('Введите число', 0);
  } while (!isFinite(num));
  if (num === null || num === '') return null;
  return +num;
}
alert(`Число: ${readNumber()}`);

function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 3));

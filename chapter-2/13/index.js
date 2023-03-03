let i = 3;
while (i) {
  alert(i--);
}
//1

let i = 0;
while (++i < 5) alert(i);
//1234

let i = 0;
while (i++ < 5) alert(i);
//12345

for (let i = 0; i < 5; i++) alert(i);
//01234

for (let i = 0; i < 5; ++i) alert(i);
//01234

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}
//2 4 6 8 10

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
//or
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;
do {
  num = prompt('Введите число больше 100?', '');
} while (num <= 100 && num);

let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i);
}

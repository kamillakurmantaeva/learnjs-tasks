//1

//true
if ('0') {
  alert('Привет');
}

//2
let value = prompt('Какое "официальное" название JavaScript?', '');

if (value == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

//3
let value1 = prompt('Введите число', '');

if (value1 > 0) {
  alert(1);
} else if (value1 < 0) {
  alert(-1);
} else {
  alert(0);
}

//4
let result = a + b < 4 ? 'Мало' : 'Много';

//5
let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';

let d = new Date(2012, 1, 20, 3, 12);
alert(d);

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}
let date = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date)); // ПТ

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}
let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date)); // вторник, нужно показать 2

function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
alert(getLastDayOfMonth(2012, 0)); // 31
alert(getLastDayOfMonth(2012, 1)); // 29
alert(getLastDayOfMonth(2013, 1)); // 28

function getSecondsToday() {
  let now = new Date();
  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}
alert(getSecondsToday());

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

function getSecondsToTomorrow() {
  let now = new Date();
  // завтрашняя дата
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now; // разница в миллисекундах
  return Math.round(diff / 1000); // преобразуем в секунды
}

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;
  return totalSecondsInADay - totalSecondsToday;
}

function formatDate(date) {
  let diff = new Date() - date; // разница в миллисекундах
  if (diff < 1000) {
    // меньше 1 секунды
    return 'прямо сейчас';
  }
  let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды
  if (sec < 60) {
    return sec + ' сек. назад';
  }
  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' мин. назад';
  }
  // отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

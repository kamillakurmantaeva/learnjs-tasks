function unique(arr) {
  return Array.from(new Set(arr));
}
let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
alert(unique(values)); // Hare,Krishna,:-O

function aclean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
alert(aclean(arr));

let map = new Map();
map.set('name', 'John');
let keys = Array.from(map.keys());
keys.push('more');
alert(keys); // name, more

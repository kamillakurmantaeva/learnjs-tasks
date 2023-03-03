'use strict';

let str = 'Привет';

str.test = 5;

alert(str.test); // undefined

// with 'use strict'
//TypeError: Cannot create property 'test' on string 'Привет'

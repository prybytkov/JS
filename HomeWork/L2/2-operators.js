// 1 задание

// Определите результат и тип переменных в следующих случаях:

var r = '9' + 0; // "90" string

var r = 9 + '0'; // "90" string

var r = 4 + 9; // 13 number

var r = null + 7; // 7 number

var r = '6' + null; // "6null" string

var r = '6' + []; // "6" string

var r = '6' + undefined; // "6undefined" string

// 2 задание

// Будет ли верным выражение:

    2/3 + 1 + 1/3 == 2

// Опишите почему да или нет?
// Нет, результат деления - дробные числа, в левой части будет 1.9(9) что меньше, чем 2



    // 3 задание

// Определите результат в следующих случаях:

var r;
var t = ++2; // 3 
var u = 1++; // 1
var w = 2--; // 2

r = 6 && 0 && 7; // 0

r = -9 && -8; // -8

r = 6 && 0 && 7;// 0

r = "string" && 0;// 0

r = [] && {} && 7; // 7

r = [] || 7; // []

r = {} || 0; //  {}

r = false || true; // true

r = "2" > "3"; // false

r = "ab" <= "fg"; // true

r = "2k" <= "8l"; // true

r = "2" != 2; // false

r = "2" !== 2; // true

r = t + 2; // 5

r = t + 2--; //  5

r = u - w; // -1

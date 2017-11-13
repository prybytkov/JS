// 1 задание
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//     Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

function isPrime(a) {

    if ((a <= 3) && (a !== 1)) {
        return true;
    } else {
        for (var b = 2; b < a; b++) {
            if (a % b === 0) {
                return false;
            }
        }
        return true;
    }
}


function rangePrime(x, y) {

    var primeArr = [];

    if (x < y) {
        for (var i = x; i <= y;  i++) {
            if (isPrime(i) === true) {
                primeArr.push(i);
            }
        }
    }
    else if (x < y) {
        for (var j = x; j <= y; j++) {
            if (isPrime(j) === true) {
                primeArr.push(j)
            }
        }
    }

    else if (x = y) {
        alert(0)
    }
    console.log(primeArr);
}

rangePrime(2,10)

// 2 задание

// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
//     var obj = {
//         className: 'open menu'
//     }
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
//
//     addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
//
// alert( obj.className ); // "open menu new me"
// P.S. Ваша функция не должна добавлять лишних пробелов.


var obj = {
    className: 'open menu'
};

function addClass(obj, cls){
    var arr = obj.className.split(" ");

    if (arr.indexOf(cls) === -1){
        arr.push(cls);
    }
    obj.className = arr.join(' ');
    return obj;

}

    addClass(obj, 'new');
    addClass(obj, 'open');
    addClass(obj, 'me');
    console.log(obj.className);

// 3 задание
//
// У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
//
//     var obj = {
//         className: 'open menu'
//     };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//
//     removeClass(obj, 'open'); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
//
//     obj = {
//         className: 'my menu menu'
//     };
// removeClass(obj, 'menu');
// alert( obj.className ); // 'my'
// Лишних пробелов после функции образовываться не должно.

var obj  = {
    className : 'open menu'
};

 function removeClass (obj, cls){
     var arr = obj.className.split(' ');
     for (var i = arr.lenght; i >= 0; i--){
         if (arr[i] === cls){
             arr.splice(i, 1)
         }
     }
     console.log(obj);
 }

removeClass(obj, 'open')




// 4 задание
//
// Напишите код, который:
//
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. Заканчивает ввод,
// как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число. Выводит сумму всех значений массива когда ввод прекращен.

var arr = [];

function request (){
 var enterText = prompt("Enter Text");
   if ((!isNaN(enterText)) && (enterText !== null)){
       arr.push(+enterText);
       request();
   }
    var count = 0;
    for (i in arr) {
        count += arr[i];
    }
    console.log(count)
   }
 request();





// 5 задание
//
// Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2).
// В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
//
// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
//
//     Например:
//
// console.log(fib(3)); //2
// console.log(fib(7)); //13
// console.log(fib(77)); //5527939700884757



function fib(n) {
    var arr = [1,1];
    for (var a=2; a < n; a++) {
        arr.push(arr[a - 1] + arr[a - 2]);
    }
    console.log(arr[n-1]);
}

fib(3)



// 6 задание
//
// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
// Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

    function cutLenght(string) {

        var twenty = "";

        if (string.length > 20) {
            twenty += (string.slice(0, 20) + "...");
        } else {
            twenty = string;
        }
        return twenty;
    }

    cutLenght(qwertyuiopasdfghjkllzxcv);

// 7 задание
//
// Напиште код который выведет сотрудника который выполнил больше всех задач.
//
//     Например:
//
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function hardWorker(obj) {
    var tasks = 0;
    var worker;

    for (name in tasksCompleted){
        if (tasksCompleted[name] > 0){
            tasks = tasksCompleted[name];
            worker = name;
        }
    }
console.log(worker);
}
  hardWorker(tasksCompleted);

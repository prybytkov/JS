// 1 task
//
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
//

var str = 'aaa@bbb@ccc';
var strNew = str.replace(/@/g, '!')

console.log(strNew)



// 2 task
//
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
//

var str = 'aaa bbb ccc';
var strNew = str.substr(4, 3);

console.log(strNew);

var str = 'aaa bbb ccc';
var strNew = str.substring(4, 7);

console.log(strNew);

var str = 'aaa bbb ccc';
var strNew = str.slice(4, 7);

console.log(strNew);

// 3 task
//
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
//

var date = '2025-12-31'

var dateNew = date.split('-').reverse().join('/');

console.log(dateNew);



// 4 task
//
// Дана строка 'js'. Сделайте из нее строку 'JS'.
//


var  str = 'js'
var strNew = str.toUpperCase()

console.log(strNew)


// 5 task
//
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
//

var str = "я учу javascript!";
var length = str.length;
console.log(length);


// 6 task
//
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.
//


    function cutStr(n){
    var str = prompt('Text');
        if (str.length <= n){
        var result =  str;
        }
        else{ result = str.slice(0, n) + '...';
        }
        console.log(result)
    }

    cutStr(7)

// 7 task
//
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//
var str = "я учу javascript!";
var arr = str.split(" ");

console.log(arr);



// 8 task
//
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
//

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');

console.log(str);


// / 9 task
//
// Преобразуйте первую букву строки в верхний регистр.
//

function firstLetterUp(){
    var str = prompt('Text');
    var strNew = str[0].toUpperCase();
    console.log(strNew);
}

// 10 task
//
// Преобразуйте первую букву каждого слова строки в верхний регистр.
//

function firstLetterUp(string){
    var str = string;
    var parcer = '';
   parcer = str[0].toUpperCase();

        for (i = 1; i < str.length; i++){
            if ( str[i-1] === ' '){
                parcer = parcer + str[i].toUpperCase();
            }
            else {
                parcer = parcer + str[i];
            }
        }
        console.log(parcer);
}
firstLetterUp('one two three');

// 11 task
//
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми
// аналогичными строками.
//

var str = 'var_test_text';
var arr = str.split('_');

    for (i = 1; i < arr.length; i++){
   arr[i] = firstLetterUp(arr[i]) // function from ex #10
}
    var arrNew = arr.join('');
console.log(arrNew);


// 12 task
//
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
//



// 13 task
//
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца. То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.
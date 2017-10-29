// 1 задание
// Выведите столбец чисел от 1 до 50.

for (var a = 1; a <= 50; a++) {
    console.log(a)
}


// 2 задание
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

var arr = [1, 2, 3, 4, 5];

    for (var a = 0; a < arr.length; a++) {
    console.log(arr[a])
    }



// 3 задание
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

var arr = [2, 3, 4, 5];
var mp = 1;

    for (var a = 0; a < arr.length; a++) {
    mp *= arr[a];
    }


// 4 задание
// Дан объект obj с ключами 'Минск', 'Москва', 'Киев' и значениями соответственно: 'Беларусь', 'Россия', 'Украина'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

var obj = {
    Bel: 'Minsk',
    Ru : 'Moscow',
    UA : 'Kyiv'
}
for (var a in obj){
    console.log( obj[a] + " - is  " + a)
}

// 5 задание
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерации - это количество проходов цикла),
// и запишите его в переменную num.

for (var n = 1000, num = 0; n >= 50; n /= 2 , ++num)
    console.log(n, num)


// 6 задание
//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.

var arr = [2, 5, 9, 15, 0, 4];

for (a in arr){
    if ( arr[a] > 3 && arr[a] < 10){
        console.log(arr[a])
    }
}



// 7 задание
// Составьте массив месяцев. С помощью цикла for выведите все месяцы, а текущий месяц выведите жирным.
// Текущий месяц должен храниться в переменной month.




var arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

for (a in arr){
    console.log(arr[a])
}































// 1 задание
// Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 1, 0, -3.

var a = +prompt("Num")

if (a === 0) {
    console.log("True")}
    else {
    console.log("False")}

//2 задание
// Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.

var a = prompt("test")

if (a === "test") {
    console.log("True")}
else {
    console.log("False")}

//3 задание
// Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'.
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.


//4 задание
//Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result.
// Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10.
// Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

var a = +prompt("A");
var b = +prompt("B");
var result = a+b;

if ( result > 5){
    result = 5;
}
    else if (result < 5){
    result *= 10;
   }
    else if (result = 5){
        console.log(result)
}



//5 задание
// Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран.
// Проверьте работу скрипта при a, равном 5, 0, -3, 2

var a = +prompt("A");

if ( a === 0 || a === 2){
    a /= 10;
}
 else {a += 7};

console.log(a)


// 6 задание

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных,
// иначе выведите 'Неверно!'. Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

var a = +prompt("A");
var b = +prompt("B");

if ( a <= 1 && b >= 3){
    console.log(a + b)
}
else {console.log("False")}


// 7 задание

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на
// 2, иначе прибавьте к a число 5.
// Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.

var a = +prompt("A");
var b = +prompt("B");

if ( (a >= 2 && a <=11) || (b >= 6 && b <= 14)){
    a *= 2
}
else { a += 5};
    console.log(a)



// 8 задание
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'лето' и так далее.
// Решите задачу через switch-case.
var a = +prompt("A");

switch (a) {
    case 1:
        alert('Winter')
        break;
    case 2:
        alert("Spring")
        break;
    case 3:
        alert('Summer')
        break;
    case 4:
        alert("Autumn")
        break;
       default:
        alert("1-4")
           break;
}


// 9 задание
// Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком.
// Решите задачу через 3 if, через switch-case и через многомерный массив


var lang = prompt("your lang");
var arrLang = [];

   if (lang == "en"){
<<<<<<< HEAD
       arrLang = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sut", "Sun"]
          }
        else if ( lang == "de"){
       arrLang = ['PnDE', 'VtDE', 'SrDE', 'CheDE', 'PtDE', 'SbDE', 'VsDE']
                 }
          else if (lang == "ru"){
            arrLang = ['Pn', 'Vt', 'Sr', 'Che', 'Pt', 'Sb', 'Vs' ]
=======
       arrLang = ['Mon,Tue,Wed,Thu,Fri,Sut,Sun']
       // every element in array should be a separate element, so this array should have a 7 elements, but your array have only 1 element
       // eg: arrLang = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sut", "Sun"]
          }
        else if ( lang == "de"){
       arrLang = ['PnDE,VtDE,SrDE,CheDE,PtDE,SbDE,VsDE']
            // the same as in "en"
                 }
          else if (lang == "ru"){
            arrLang = ['Pn,Vt,Sr,Che,Pt,Sb,Vs']
            // the same as in "en"
>>>>>>> 92d992f5b3cbaec3eb94bc235f371696357a0d49
         }
console.log(arrLang)
//
//
//
var lang = prompt("your lang");

    arrLangEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sut", "Sun"];
    arrLangDe = ['PnDE', 'VtDE', 'SrDE', 'CheDE', 'PtDE', 'SbDE', 'VsDE'];
    arrLangRu = ['Pn', 'Vt', 'Sr', 'Che', 'Pt', 'Sb', 'Vs' ];

switch (lang) {
    case "en":
        alert( arrLangEn )
        break;
    case "de":
        alert( arrLangDe )
        break;
    case "ru":
        alert( arrLangRu )
        break;
    default:
        alert("en,de,ru - only!")
        break;
}
//
//
//
var lang = prompt("your lang");
var arrLang = [];
    arrLang[0] = [["Mon", "Tue", "Wed", "Thu", "Fri", "Sut", "Sun"],['PnDE', 'VtDE', 'SrDE', 'CheDE', 'PtDE', 'SbDE', 'VsDE'],['Pn', 'Vt', 'Sr', 'Che', 'Pt', 'Sb', 'Vs' ]];
         if (lang == "en"){
             console.log(arrLang[0][0])
}
         else if ( lang == "de"){
                console.log(arrLang[0][1]);
}
            else if (lang == "ru"){
             console.log(arrLang[0][2])
}



































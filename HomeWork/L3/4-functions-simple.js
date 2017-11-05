// 1 task
// Create function "getName" that ask user his name with promt window and alerts his name to him in format: "Hello, <his_name>".


    function getName(name) {
    var name = prompt('Name');
           alert('Hello, ' + name)
}

getName(); // "Hello, Lily";


// 2 task

// Create function double(x) that returns the number passed to it as an argument, multiply with 2

    function double(x) {
        return x * 2
           }


double(6); // logs in console => 12


// 3 task
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];

function range(x, y) {

    var res = 0;

   if (x < y) {
       for( var a = x; a <= y; a++) {
       res += a;
             }
    }
            else if  (x > y) {
                for (var b = y; b => x ; b++) {
               res += b;
                    }
            }
                else if ( x = y) {
                     res += x;
                     }
   return res;
}

range(1,3); // logs in console => 6



// 4 task
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:

     function getPrimesSumBelow(a) {

      for (var i = a, result = 0; i > 1; i--) {
             if ( "определяем простые числа:)" ) {
                 result += i;
             }
         }

         console.log(result);
     }

getPrimesSumBelow(10); // 2 + 3 + 5 + 7 = 17
//


// 5 task
// Create a function that returns true if number is odd, and false if even;

function odd(x) {
        return (x % 2 !== 0);
}

// 6 task
// Create a function that returns all odd numbers in range, use the previous function inside this one;

function allOdd (a, b) {

    var oddArr = [];

    if(a < b) {
        for (var i = 0, j = a; j <= b; j++) {
            if (odd(j) === true) {
                oddArr[i] = j;
                i++;
            }
        }
    }

    return oddArr;
}

           allOdd(1, 10);

// 7 task
// Create a function that will call promt window that will ask for a number to user, until he enters 9;


function num() {
    var x = +prompt("Number");

    if (x !== 9) {
        num();
    } else {
        alert("NINE!");
    }
}

    num()

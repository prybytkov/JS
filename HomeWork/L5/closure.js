// Links for additional info:
//
//     https://learn.javascript.ru/recursion
//         https://learn.javascript.ru/global-object
//             https://learn.javascript.ru/closures
//                 1 task
//
// Example:
//
//     var makeFunction = function () {
//         var addOne = function (x) {
//             return x + 1;
//         };
//         return addOne; // return the function
//     };
// // makeFunction is a function with no arguments
//
// var f = makeFunction();
// // f is a function that takes one argument
//
// var y = f(3);
// // now y is 4
// Create a function that will always return a number multiply on 3.
//
// Write a JavaScript program to calculate the factorial of a number using 1 task,
// but ask user for a number to get factorial from using prompt() function.
//
// !! TODO
//
// Then give an answer to user after calculation is finished using alert(number);







//
// 2 task
//
// Make this syntax possible: var a = add(2)(3); //5
//
// var add = function () {
//     // your code
// };
//
// console.log(add(2)(3)); // 5


     var add = function (a) {
        return function (b){
            return a + b;
        }

};

console.log(add(2)(3))


// 3 task
//
// Transform array of numbers to array of functions that will alert that digits:
//
//
//     var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];
//
// // in result we will have: [function (){...}, function (){...}, function (){...}, function (){...}]


 function numberArray (arr){
    var newArr = [];
        for ( i= 0; i < arr.length; i++){
            newArr.push(alert(arr[i]));
        }
console.log(newArr)
 }
numberArray([1, 2, 3, 4, 10, 5, 6, 7])

// 4 task
//
// Please write a function "double" and "doubleTripple" so the following code will be true. To create a "doubleTripple" function please use double function inside.
//
// double(9); // 18
// double(3); // 6
//
// doubleTripple(3); // 18 = 3 * 3 * 2
// doubleTripple(2); // 12 = 2 * 3 * 2
// doubleTripple(5); // 30 = 5 * 3 * 2

function double (a){
     return a * 2
}

function doubleTriple (b){
    return double(b) * 3
}

doubleTriple(5);


// 5 task
//
// Please write a function "makeCount" so the following code will be true.
//
//     function createCount () {
// // your code here
// }
//
// var makeCount = createCount();
//
// makeCount(); // 1
// makeCount(); // 2
// makeCount(); // 3
// makeCount(); // 4
// makeCount(); // 5
// makeCount(); // 6

function createCount () {

    var count = 1;
    return function () {
              return count++;
    }
}
var makeCount = createCount();

makeCount()

// 6 task
//
// Please write a function "makeCount" so the following code will be true. Use the previous function.
//
// function createCount (startFrom) {
// }
//
// var makeCount = createCount(4);
//
// makeCount(); // 5
// makeCount(); // 6
// makeCount(); // 7
// makeCount(); // 8
// makeCount(); // 9
// makeCount(); // 10


function createCount (startFrom) {
    var count = startFrom;

    return function () {
        return ++count;
    }

}

var makeCount = createCount(4);

makeCount();
// 1
var str = "Have a good day!";

console.log(str);

// 2

var age = 25;

console.log(age);

age = undefined;

// 3

var info = {
     name : "Illia",
    age : 32
};

console.log(info.name);
console.log(info.age);

var name;
name = info.name;
console.log(name);

delete info.name;
console.log(name);

// 4

var customArray = [1,2,3];
console.log(customArray);
customArray[0]=5;
console.log(customArray);

// 5

var student = "Illia";
console.log(student);
student = "Prybytkov Illia";
console.log(student);

// 6

 var complex = [];
 complex[0] = "My name is:";
 complex[1] = 7;
 complex[2] = null;
 complex[3] = info.name;

 console.log(complex[2]);

// 7

var complexObj = {};

complexObj.name = "Illia";
complexObj.age = 32;
complexObj.friends = [ "Zorya","Ksu","Nata","Serj","Nick"];
complexObj.soc_links = {
    facebook: 'FB',
    googlePlus : 'GP'
};

console.log('My name is ${complexObj.name}. I am ${complexObj.age}. I have a lot of friends, but the best one is: ${complexObj.friends[0]}. You can find me on facebook: ${complexObj.soc_links.facebook} or on goole groups: ${complexObj.soc_links.googlePlus}');

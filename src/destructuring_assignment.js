var [name, age] = ['taro', 20];

console.log(name, age);

var value1 = 10;
var value2 = 20;

console.log(value1, value2); // 10 20

// 値の入れ替えは一行
[value1, value2] = [value2, value1];

console.log(value1, value2); // 20 10
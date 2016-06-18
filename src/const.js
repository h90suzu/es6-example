const value = 1;

// value = 2; Read Only Error

// const value = 2; Duplicate Eeclaration Error

if (true) {
    const num = 1;
}

// console.log(num); Not Defined Error

const array = [1, 2, 3];

// array = [4, 5]; Read Only Error

array.push(4);

console.log(array);


const obj = { hoge: 'hoge' };
obj.foo = 'foo';
console.log(obj);
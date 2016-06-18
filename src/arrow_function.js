// 引数が一つの場合の省略
const say = name => {
    console.log(name);
}

say('taro'); // taro

// 一文の場合, returnを省略できる
const add = (x, y) => x + y;

console.log(add(1, 2)); // 3


// thisの取り扱い

const obj = {
    test() {
        console.log(this); // obj

        var func = () => {
            console.log(this); // obj
        }

        func();
    }
}

obj.test();
# ES6の構文サンプル

## セットアップ

```sh
$npm install

# 開発
$npm run build:watch

# 実行
$ node ./dist/〜.js
```

## 構文リスト

- let, const
- template literal
- destructuring assignment (分割代入)
- spread operator (スプレッド演算子)
- default parameters
- rest parameters
- arrow function
- class


## let, const

### let

- 変数の再定義不可
- 再代入可能
- ブロックスコープ

```js
let value = 1;
let value = 2; // Duplicate Eeclaration Error (babelはビルドエラー)
```

```js
let value = 1;
value = 2;

console.log(value); // → 2
```

```
if (true) {
	let value = 1;
}

console.log(value); // Not Defined Error (babelのビルドは通る)
```

### const

- 変数の再定義不可
- 再代入不可
- ブロックスコープ
- 配列の値, オブジェクトのプロパティは変更可能

```js
const value = 1;
value = 2; // Read Only Error. (babalはビルドエラー)
```

```js
if (true) {
	let value = 1;
}

console.log(value); // Not Defined Error (babelのビルドは通る)
```

```js
const array = [1, 2, 3];

array.push(1);

console.log(array); // [1, 2, 3, 4]


const obj = { hoge: 'hoge' };

obj.foo = 'foo';

console.log(obj); // { hoge: 'hoge', foo: 'foo' }
```

## template literal

- 文字列展開
- 複数行

```
var str;
var name = 'taro';

str = `I'm ${name}.`;

console.log(str); // I'm taro.

str = `
I'm ${name}.
I'm 20.
`;
/*
I'm taro.
I'm 20.
*/

```

## destructuring assignment (分割代入)

- 複数の変数に同時に代入
- 値の入れ替え

```js
var [name, age] = ['taro', 20];

console.log(name, age); // taro 20


var value1 = 10;
var value2 = 20;

[value1, value2] = [value2, value1];

console.log(value1, value2); // 20 10
```

## spread operator

- 配列の展開

```js
var array1 = [3, 4];
var array2 = [1, 2, ...array1];

console.log(array2); // [1, 2, 3, 4]

console.log(...array2) // 1 2 3 4
```

## Default parameters

- 引数の初期値

```js
const say = (name = 'taro') => {
    console.log(name);
};

say(); // taro
say('hanako'); // hanako
```

## Rest parameters

- 引数を配列にまとめる

```js
const rest = (x, y, ...nums) => {
    console.log(nums);
};

rest(1, 2, 3, 4, 5); // [3, 4, 5]

rest(1, 2, 3); // [3]

rest(1, 2); // []
```

## arrow function

- thisのbind
- 省略形

```js
// アロー関数内部のthisは関数の定義時に決まる

const obj = {
    test() {
        console.log(this); // obj

        var func = () => {
            console.log(this); // obj
        }

        func();
    }
}
```

```js
// 引数が一つの場合の省略
const say = name => {
    console.log(name);
}

// 一文の場合のreturn 省略系
const func = (x, y) => x + y;

const func = (x, y) => (
	x + y
);

```

## class

- 初期化
- インスタンス変数, メソッド
- 継承
- オーバーライド
- private 変数, メソッドの定義は不可

```js
class Human {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(`I'm ${this.name}. ${this.age} years old`);
    }

    static hello () {
        console.log('hello');
    }
}

class Man extends Human {

    constructor(name, age) {
        super(name, age);
        this.sex = 'man';
    }

    say() {
        super.say();
        console.log(`I'm a ${this.sex}`);
    }
}

const human = new Human('sato', 20);
human.say();
Human.hello();

const man = new Man('taro', 20);
man.say();
Man.hello();
```
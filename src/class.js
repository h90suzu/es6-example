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
const say = (name = 'taro') => {
    console.log(name);
};

say(); // taro
say('hanako'); // hanako

const introduce  = (name = 'taro', age) => {
    console.log(`I'm ${name}. ${age} years old.`);
};
//
introduce(null, 20); // I'm null, 20 years old.

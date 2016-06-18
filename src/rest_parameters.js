const rest = (x, y, ...nums) => {
    console.log(nums);
};

rest(1, 2, 3, 4, 5); // [3, 4, 5]

rest(1, 2, 3); // [3]

rest(1, 2); // []

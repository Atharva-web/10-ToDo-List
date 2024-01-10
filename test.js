// spread operator

let obj1 = {
    id: 1,
    name: "atharva"
}

let obj2 = {
    isCool: true,
    isStudent: true,
    isWorkingCurrently: true
}

let obj3 = {
    ...obj1, ...obj2
}

// console.log(obj3)

let arr = [{}]
// console.log(arr.length);

// filter

let nums = [1,2,3,4,5,6];
let ans = nums.filter(function(num) {
    return num%2 === 0;
});
// let ans = nums.filter((num) => num%2 === 0);
// console.log(ans);

let arr3 = nums.map(function(num) { // forEach will not return anything, it is used to iterate over the array elements
    return num = num * 2;
});

// console.log(arr3);

let obj = {
    name: "atharva",
    age: 21
}

let obj0 = {
    name: "aditya",
    age: 17
}

obj0 = {...obj, ...obj0};
// console.log(obj0);

let emp = {
    id: 1,
    name: "john"
}

// console.log({emp});

let changeEmp = {
    ...emp,
    name: "peter"
}

console.log({changeEmp});
// Test
let x = 99;

console.log(x);
x='hello';
console.log(x);

function test(val, ...b) {
    console.log(b);
}

test(1,2,3,4,5);
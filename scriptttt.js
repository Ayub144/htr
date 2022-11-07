//Задание-1
function test(a) {
     console.log(`четное ${a}`);
}
test(2);

//Задание-2
function fin(b,c,d) {
    if ((b > c) & (b >= d)) {
        return b;
    } else if ((c >= b) & (b >= d)) {
        return c;
    } else {
        return d;
    }
}
console.log(fin(1,3,4))

//Задание-3
function x (d,m) {
    const result = d * m;
    console.log(result)
}
x(10000,0.5);

//Задание-5
// Выведется 120. Почему? Потому,что так надо.




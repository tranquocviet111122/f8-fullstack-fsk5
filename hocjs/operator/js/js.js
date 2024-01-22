// Biểu thức = Toán hạng + toán tử
/**
 ex: total = a + b * c;

 1. Toán tử số học 
 +
 -
 *
 /
 %
 ++: tăng
 --: giảm
 **: lũy thừa
*/

var a = 10;
a++;
--a;
console.log(a);

var count = 1;
// var total = 10 + count++;
// console.log(total);
// var total = 10 + ++count;
// console.log(total);

var total = ++count - --count * count++ + count--;
// = 2 - 1 * 1 - 2
console.log(total);

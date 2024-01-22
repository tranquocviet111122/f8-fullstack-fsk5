//Bài 1:

var a = 2;
var b = 4;
var c = 0;

console.log(`Số ban đầu: a = ${a} : b =  ${b}`);

c = a;
a = b;
b = c;

console.log(`Số sau hoán vị:a = ${a} : b = ${b} `);

//Bài 2:

var s = 10 + 20 + 5 ** 10 / 2;
console.log(`s = 10 + 20 + 5^10 * 2 \ns = ${s}`);

//Bài 3:

var a = 100;
var b = 200;
var c = 300;
var max = 0;

if (a >= b && a >= c) {
  max = a;
}
if (b >= a && b >= c) {
  max = b;
}
if (c >= a && c >= b) {
  max = c;
}

console.log(`Số lớn nhất trong các số\na: ${a}\nb: ${b}\nc :${c} \n=>: ${max}`);

//Bài 4:

var a = 100;
var b = -100;

if (a * b > 0 )  {
  console.log(`Hai số cùng dấu`);
} else if (a * b < 0) {
  console.log(`Hai số khác dấu`);
} else {
  console.log(`Phần tử có chứa số : 0`);
}

//Bài 5:

var a = 3;
var b = -5;
var c = 10;
var x = 0;
console.log(`Thứ tự ban đầu: ${a}, ${b}, ${c}`);

if (b <= a) {
  x = a;
  a = b;
  b = x;
}
if (c <= b) {
  x = b;
  b = c;
  c = x;
}
if (b <= a) {
  x = a;
  a = b;
  b = x;
}

console.log(`Thứ tự tăng dần: ${a}, ${b}, ${c}`);

if (b >= a) {
    x = a;
    a = b;
    b = x;
  }
  if (c >= b) {
    x = b;
    b = c;
    c = x;
  }
  if (b >= a) {
    x = a;
    a = b;
    b = x;
  }
  
  console.log(`Thứ tự giảm dần: ${a}, ${b}, ${c}`);
  

/*
Biến :
Lưu trữ dữ liệu tạm thời
Có thể đặt tên
biến không cần khai báo kiểu dữ liệu

- quy tắc đặt tên trong lập trình
    .camelCase : Đặt tên biến tên hàm
    .PascalCase : Đặt tên lớp, Component các framework
    .underscore: đặt tên trong database , api response

    Kiểu dữ nguyên thủy
    number
    null
    undefined
    string
    boolean: true, false
kiểu dữ liệu tham chiếu:
    -object
    funcition
*/

var userId = 1,
  redColor;
console.log(userId);
console.log(redColor);

var fullname, age, address;
var username;
var userEmail;

var age = 31; //number
var fullname = "Viet"; //sting
var check = true; //boolean
var address = undefined; //underfined
var lastName = null;

// kỹ thuật lối chuỗi
var courseName = "!";
var welcome = "Chao mung ban " + courseName;
console.log(welcome);
//template string BackticK

var courseName = "!\t";
courseName = courseName + "#";
var welcome = `Chao
 mung
  ban ${courseName}`;
console.log(welcome);

// Kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof age);
console.log(typeof check);
console.log(typeof lastName);
console.log(typeof courseName);
console.log(lastName === null);

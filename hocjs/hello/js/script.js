// console.log("Hello f8");
// var names = "Viet";
// var title = "<h1>Hello" + names + " </h1>";

// document.write(title);

// var a = 1;
// var total = 1 + 2 + (a >= 5 ? 5 : 10) + 4 + 5;
// console.log(total);

// var b = null;
// var c = b !== null && b !== undefined ? b : "F8";
// document.write(c);

// var x = false;
// var y = x || "F8";
// console.log(y);

// var salary = 15000000;
// console.log(`Muc luong hien tai la: ${salary}`);
// var tax;
// var d;
// if (salary <= 5000000) {
//   tax =3 ;

// }
// if (salary >= 5000000) {
//   tax = 5 ;

// } if (salary >= 15000000) {
//    tax = 10;
// }
// d = salary - tax * salary / 100;
// console.log(`Luong sau thue: ${d} `);
// console.log(`Luong thuc nhan: ${d + 1000000}`)

// var a = 10;
// var b = a > 9;
// 4;
// console.log(b);

// var a = 0;
// var b = a !== null && a !== undefined ? b : "Không xác định";
// document.write(` ${b} \n`);

var month = 4;
if (month % 1 === 0 && month >=1 && month <= 12 && typeof month === "number"){
    switch(month){
        case 2:
            document.write(` Tháng ${month} có : 28- 29 ngày`);
        
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
            document.write(` Tháng ${month} có : 31 ngày`);
        
    
        break;
        default:
            
                document.write(` Tháng ${month} có: 30 ngày`);
            
            break;
    }
}  else{
    document.write(` Không có tháng ${month}`)
}

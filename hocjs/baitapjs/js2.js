// Bài 1
document.write("<br> Bài 1: <br> <br>");
var taxi = 15;
document.write(` Số km: ${taxi} <br>`);
var km, moneys, money;
if (taxi <= 1 && typeof taxi === "number") {
  km = 15000;
} else if (taxi <= 5) {
  km = 13500;
} else if (taxi > 5) {
  km = 11000;
}
money = taxi * km;
moneys = money - money * 0.1;
if (taxi >= 120 && typeof taxi === "number") {
  document.write(`Số tiền phải trả là: ${money} đ <br>`);
  document.write(` Số tiền phải trả khi đi > 120 km là (-10%): ${moneys} đ`);
} else {
  document.write(`Số tiền phải trả là: ${money} đ <br>`);
}

// Bài 2
document.write("<br> Bài 2: <br>");

var kwh = 310;
var bill;
var level1 = 1.678,
  level2 = 1.734,
  level3 = 2.014,
  level4 = 2.536,
  level5 = 2.834,
  level6 = 2.927;

if (kwh >= 0 && kwh <= 50) {
  bill = kwh * level1;
} else if (kwh <= 100) {
  bill = 50 * level1 + (kwh - 50) * level2;
} else if (kwh <= 200) {
  bill = 50 * level1 + 50 * level2 + (kwh - 100) * level3;
} else if (kwh <= 300) {
  bill = 50 * level1 + 50 * level2 + 100 * level3 + (kwh - 200) * level4;
} else if (kwh <= 400) {
  bill =
    50 * level1 +
    50 * level2 +
    100 * level3 +
    100 * level4 +
    (kwh - 300) * level5;
} else {
  bill =
    50 * level1 +
    50 * level2 +
    100 * level3 +
    100 * level4 +
    100 * level5 +
    (kwh - 400) * level6;
}

document.write(
  ` Số điện tiêu thụ là: ${kwh} <br> Số tiền phải trả là: ${bill} đ <br><br><br>`
);

// Bài 3

//S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

//Bài 5: Vẽ tam giác số
document.write("<br> Bài 5: <br><br>");
var n = 9;
for (var i = 0; i <= n; i++) {
  document.write(`${i}`);
  for (var j = 1; j <= i - 1 * 1; j++) {
    document.write(`${j} `);
  }
  document.write(`<br>`);
}

// Bài 6: Vẽ bàn cờ vua
document.write(`<br> Bài 6:<br> <br>`)
var row, col, s;
document.write(`<table>`);

for (row = 1; row <= 8; row++) {
  document.write(`<tr>`);
  for (col = 1; col <= 8; col++) {
   s = row + col;
    if (s % 2 == 0) {
        document.write(`<td height=30px width=30px bgcolor=#CCC></td>`);  
    } else {
      document.write(`<td height=30px width=30px bgcolor=#RRR ></td>`);
    }
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
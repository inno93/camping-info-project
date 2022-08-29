/*
1야드(yd)는 91.44cm이고 1인치(in)는 2.54cm이다.

2.1야드와 10.5인치를 각각 cm로 변환하여 다음 형식에 맞추어 소수 첫째자리까지 출력하시오.​

*/
let yd = 91.44 * 2.1, inch = 2.54 * 10.5;
let a= "2.1", b= "10.5";

console.log(`${a.padStart(4)}yd = ${(yd.toFixed(1).padStart(5))}cm`);

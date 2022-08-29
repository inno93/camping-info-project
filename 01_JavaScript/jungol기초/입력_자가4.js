/*
추의 무게를 저장할 변수와 중력의 비율을 저장할 변수를 선언하고,

다음 두 값을 변수에 저장하여 곱셈 계산식을 출력하는 프로그램을 작성하라.

추의 무게 = 49, 중력의 비율 = 0.2683
*/

let weight, rate;

weight = 49;
rate = 0.2683;
console.log(`${weight} * ${rate.toFixed(6)} = ${(weight * rate).toFixed(6)}`);
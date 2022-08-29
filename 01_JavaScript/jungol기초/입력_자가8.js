/*
 실수 2개와 한 개의 문자를 입력 받아 출력하되 실수는 반올림하여 소수 둘째자리까지 출력하는 프로그램을작성하시오.
(C, C++, Java 의 경우 실수는 "double"로 선언하세요.)
 */

//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];
let cnt = 0;

rl.on('line', function(line){
    cnt++;
    input.push(line);
    if(cnt >= 3)  rl.close(); //입력완료 시 close
});

rl.on("close", function(){
    // TODO    
    console.log(parseFloat(input[0]).toFixed(2));
    console.log(parseFloat(input[1]).toFixed(2));
    console.log(input[2]);
});


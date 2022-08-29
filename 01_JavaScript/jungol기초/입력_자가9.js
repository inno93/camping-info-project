/*
세 개의 실수를 입력 받아 반올림하여 소수 셋째 자리까지 출력하는 프로그램을 작성하시오.
 
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
    console.log(parseFloat(input[0]).toFixed(3));
    console.log(parseFloat(input[1]).toFixed(3));
    console.log(parseFloat(input[2]).toFixed(3));
    
});


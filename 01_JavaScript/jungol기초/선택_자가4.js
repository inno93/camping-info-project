/**
 복싱체급은 몸무게가 

50.80kg 이하를 Flyweight, 

61.23kg 이하를 Lightweight, 

72.57kg 이하를 Middleweight, 

88.45kg 이하를 Cruiserweight, 

88.45kg 초과를 Heavyweight

라고 하자.
몸무게를 입력받아 체급을 출력하는 프로그램을 작성하시오.
 */

//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = undefined;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseFloat(e));
    rl.close(); //입력완료 시 close!

});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
    // TODO
   let weight = input[0];

   if(weight <= 50.80) console.log("Flyweight");
   else if(weight <= 61.23) console.log("Lightweight");
   else if(weight <= 72.57) console.log("Middleweight");
   else if(weight <= 88.45) console.log("Cruiserweight");
   else console.log("Heavyweight");
});
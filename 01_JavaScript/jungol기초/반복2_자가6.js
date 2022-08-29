//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = undefined, input1 = undefined;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e)); 
    
    input1 = line.trim().split(/\s+/).map((e) => parseInt(e));
    
    if(input1.length > 1 )rl.close(); //입력완료 시 close!
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
    // TODO
   let total = 0, avg = 0, check = "fail";

  for(i = 0; i < input1.length; i++){
    total += input1[i];
  }
  avg = total / input1.length;
  if(avg >= 80) check = "pass";
  console.log(`avg : ${avg.toFixed(1)}`);
  console.log(`${check}`);
}); 
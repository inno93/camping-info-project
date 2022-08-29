//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = undefined;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e));
    rl.close(); //입력완료 시 close!
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
   let num1 = input[0];
   
  switch(num1){
    case 1:
        console.log(31);
        break;
    case 2:
        console.log(28);
        break;
    case 3:
        console.log(31);
        break;
    case 4:
        console.log(30);
        break;
    case 5:
        console.log(31);
        break;
    case 6:
        console.log(30);
        break;
    case 7:
        console.log(31);
        break;
    case 8:
        console.log(31);
        break;
    case 9:
        console.log(30);
        break;
    case 10:
        console.log(31);
        break;
    case 11:
        console.log(30);
        break;
    case 12:
        console.log(31);
        break;
  }

});
//값 하나 입력받기
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
    let num1 = input[0], num2 = input[1];

    if(num1 >= 4.0 && num2 >= 4.0) console.log("A");
    else if(num1 >= 3.0 && num2 >= 3.0) console.log("B");
    else console.log("C");
});
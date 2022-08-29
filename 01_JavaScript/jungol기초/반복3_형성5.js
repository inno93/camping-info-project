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
    let num = input[0];

    for(i = 0 ; i < num; i++){
        for(j = 0; j < num * 2 - i * 2 - 2; j++){
            process.stdout.write(" ");
        }
        for(k = 0; k < i * 2 + 1; k++){
            process.stdout.write("*");
        }
        console.log();
    }
 
   
});
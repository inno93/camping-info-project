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
    let num = input[0], num1 = 1;

    for(i = 0 ; i < num; i++){
        for(j = 0 ; j < i; j++){
            process.stdout.write("  ");
        }
        for(k = 1; k <= num - i; k++){
            process.stdout.write(num1 + " ");
            num1++;
        }
        console.log();
    }
 
   
});
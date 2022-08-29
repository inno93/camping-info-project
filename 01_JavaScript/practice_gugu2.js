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
    let row = input[0], dan, mul;
    console.log(`열의 개수 : ${row}`);
    let count = 0;
    for(i=0; i <= row; i++){
        count = 1 + row + (row * i);
        for(mul = 1; mul < 10; mul++){
            for(dan=2+(i*row); dan <= count; dan++){
                if(dan <= 9) process.stdout.write(`${dan} * ${mul} = ${dan * mul}\t`);
            }
            console.log();
        }
        console.log();
    }
});
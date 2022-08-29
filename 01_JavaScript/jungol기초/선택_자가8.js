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
    let num = input[0];

    switch(parseInt(num)){
        case 4:
            console.log("scholarship");
            break;
        case 3:
            console.log("next semester");
            break;
        case 2:
            console.log("seasonal semester");
         break;
        default:
            console.log("retake");
            break;
    }
    
});
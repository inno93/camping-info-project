const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let i = 0;
let total  = 0;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e));
    console.log(`${input[input.length - 1]}시발`);
    if(input[input.length-1] <= 100) {
        for(i = 0; i < input.length; i++) {
            total += input[i];
        };
    } else { 
        console.log(total); 
        console.log(total / input.length);
        rl.close();  // 입력완료시 close!
       
        
    }
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){

});
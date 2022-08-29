//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [], cnt = 0;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)
    
    input.push(line.trim().split(/\s+/));
  
    if(input.length == 3){      
        let value = input[input.length -1];
        let area = (parseFloat(input[0]) * parseFloat(input[1]) / 2).toFixed(1);
        if(cnt != 0) process.stdout.write("Continue? ");
        cnt++;
        console.log(`Base = Height = Triangle width = ${area}`);
        input = [];
        if(!(value == "Y" ||  value == "y"))rl.close(); //입력완료 시 close!
    }
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){ 
    console.log("Continue?");
});
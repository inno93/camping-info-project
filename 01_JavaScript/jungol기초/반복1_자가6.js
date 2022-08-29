//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = undefined;
let capital = ["", "Seoul", "Washington", "Tokyo", "Beijing"];

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // 사용자가 입력한 line (string)
    
   
    input = line.trim().split(/\s+/).map((e) => parseInt(e)); 
    console.log("1. Korea");
    console.log("2. USA");
    console.log("3. Japan");
    console.log("4. China");   
    if(input[0] <= 4 && input[0] > 0)console.log("number?"+"\n"+capital[input[0]]);
    else rl.close(); //입력완료 시 close!
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
   console.log("number?"+"\n"+"none");
});
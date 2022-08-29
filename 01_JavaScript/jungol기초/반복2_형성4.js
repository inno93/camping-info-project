//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [], n=0, avg = 0, total = 0;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // 사용자가 입력한 line (string)
    if(n == 0) n = line.trim().split(/\s+/).map((e) => parseInt(e));    
    else input = line.trim().split(/\s+/).map((e) => parseInt(e));  
   
    if(n == input.length){ 
             
        rl.close(); //입력완료 시 close!
    }
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
    for(i=0; i<n; i++){
        total += input[i];
    }  
    console.log((total/n).toFixed(2));

});
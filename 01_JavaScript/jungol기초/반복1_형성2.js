//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = undefined, cnt = 0;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)


    input = line.trim().split(/\s+/).map((e) => parseInt(e));    
     rl.close();
       

    
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
    let odd = 0, even = 0, i=0;
    

    while(true){
        if(input[i] == 0) break;
        if(input[i] % 2 == 0 )even++;
        else odd++;

        i++;
    }

    console.log(`odd : ${odd}`);
    console.log(`even : ${even}`);
    
});
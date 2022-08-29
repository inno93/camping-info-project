//정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];
const NUM_STU = 5;

// 입력시  줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){ // ㅅ사용자가 입력한 line (string)
    input.push(line.trim().split(/\s+/).map((e) => parseInt(e)));
    if(input.length == NUM_STU) rl.close(); //입력완료 시 close!
});

// 입력완료 close시 수행할 코드 등록

rl.on("close", function(){
    // TODO
    //console.log('입력하신 값은:', input);
    let count = 0;
    input.forEach(score => {
        let sum = score.reduce((a, b) => a + b );   //총점
        let avg = sum / score.length;   // 평균
      
        if(avg >= 80){
            count++;
            console.log('pass');
        }else{
            console.log('fail');
        }
    });  
    console.log(`Successful : ${count}`);
});
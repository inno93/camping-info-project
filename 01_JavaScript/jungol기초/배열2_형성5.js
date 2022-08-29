// 정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

let linenum = 0;
process.stdout.write(`1class? `);
// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input.push(line.trim().split(/\s+/).map((e) => parseInt(e)));
    linenum++; 
    linenum != 1 && process.stdout.write(`${linenum}class? `);    
    
    (linenum == 4) && rl.close();
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    // console.log('arr1', arr1);
    // console.log('arr2', arr2);

   /* let row, col;
    for(row = 0; row < input.length; row++){
        let sum = 0;
        for(col = 0; col < input[row].length; col++){
          sum += input[row][col];
        }
        console.log(`${row+1}class : ${sum}`);
    }*/

    input.forEach((e, i) => {
        let total = input[i].reduce((a,b) => a + b);
        console.log(`${i+1}class : ${total}`);
    });
});
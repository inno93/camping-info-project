/*************************************
 * 369 게임
 * 1~100 까지의 자연수를 나열하되,
 * 10개 단위로 줄바꿈을 하고
 * 숫자에 3,6,9 중 하나라도 있으면 * 표시를 하기
 * 
 * [제약사항]
 * 3,6,9 포함여부 판별에는 문자열 메소드 사용하지 말고, 조건문, 순환문, 연산자만 사용하기
 * 출력에서 문자열 메소드 사용하는 것은 OK
 * 
 * [추가 도전]
 * 1 ~ n 까지 임의의 숫자에 대해서도 369게임이 동작되게 만들어 보기

[출력예시]
   1   2   *   4   5   *   7   8   *  10
  11  12   *  14  15   *  17  18   *  20
  21  22   *  24  25   *  27  28   *   *
   *   *   *   *   *   *   *   *   *  40
  41  42   *  44  45   *  47  48   *  50
  51  52   *  54  55   *  57  58   *   *
   *   *   *   *   *   *   *   *   *  70
  71  72   *  74  75   *  77  78   *  80
  81  82   *  84  85   *  87  88   *   *
   *   *   *   *   *   *   *   *   * 100

 */

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
  let num = input[0];  // 1 ~ num 까지의 숫자에 대해 369게임 동작시키기
  // TODO
  let cnt = 0, tmp = 0;
  for(k=num; k > 0; k = parseInt(k / 10 )){
    cnt++;
  }
  for(let i = 1; i <= num; i++){
    flag = false;    
    tmp = i;
    if(i % 10 == 3 || i % 10  == 6 || i % 10 == 9) flag =true;

    if(!flag){
      for(let j = 1; j < cnt; j++){
      
        if(tmp / (10 * j) >= 10) tmp  = parseInt(tmp  / (10 * j));
        // else if(tmp % 10 == 3 || tmp % 10  == 6 || tmp % 10 == 9 || parseInt(tmp / 10) == 3 || parseInt(tmp / 10) == 6 || parseInt(tmp / 10) == 9 ) flag =true;
        if(tmp % 10 == 3 || tmp % 10  == 6 || tmp % 10 == 9 || (tmp / 10 >= 3 && tmp /10 < 4) || (tmp / 10 >= 6 && tmp / 10 < 7) || (tmp / 10 >= 9 && tmp / 10 < 10) ) {
          
          flag =true;
          break;
        }
      }
    }
    
    if(flag)  process.stdout.write("*".padStart(2) + " ");
    else process.stdout.write(i.toFixed().padStart(2) + " ");
    if(i % 10 == 0) console.log();  
  }
});


// 중첩 순환문 

console.log("중첩 for 문 nested for");

// 구구단 2단 ~ 9단

// 2 x 1 = 2
// ..
// 2 x 9 = 18
// 3 x 1 = 3
// ..
// 3 x 9 = 27
// ...
// 9 x 1 = 9
// ..
// 9 x 9 = 81

// TODO
let dan = 0, mul = 0;

// 구구단 출력 : 중첩 순환문 (for)
for(dan = 2; dan < 10; dan++){
    for(mul =1; mul < 10; mul++){
        console.log(`${dan} x ${mul} = ${dan * mul}`);
    }
    console.log();
}

console.log('-'.repeat(20));
//구구단 출력 : 중첩 순환문 (while)
dan = 2;
while(dan < 10){
    mul = 1;
    while(mul < 10){
        console.log(`${dan} x ${mul} = ${dan * mul}`);
        mul++;
    }
    dan++;
    console.log();
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));

































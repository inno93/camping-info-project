/* 정규표현식 연습
 * 
 * 이번에 우리 쇼핑몰에서 할인 쿠폰을 발행하려 한다.
 * 발행되는 쿠폰의 일련번호 형식은 다음과 같다.
 * 
 *    알파벳두자리-숫자4자리-숫자3자리-알파벳3자리 
 * 
 * 알파벳은 대소문자 구문 없슴
 * 숫자는 0으로 시작하면 안됨.
 * 사용자는 발급받은 쿠폰번호를 입력해야 하는데, 
 * 위와 같은 형식만 받아들일수 있도록 만들자
 * 
 * 허용예]
 * 	Ab-7890-786-zuy
 * 	ki-2010-893-Zip
 * 
 * 불가]
 * 	xX-1200-089-zuy
 * 	p9-324-389-zopl
 * 
 * 쿠폰번호를 계속해서 입력 받으면서 
 * "유효한 쿠폰입니다"  혹은 "유효한 쿠폰이 아닙니다" 판정결과를 출력
 * 
 *
 */

/*function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);

    let matches = input.matchAll(regex);  // 매칭 수행

    let matchCount = 0;
    for(let match of matches){
        matchCount++;
        console.log(`    매치${matchCount}: ${match[0]} {${match.index}~${match.index + match[0].length}}`);
        // 그룹이 있다면 그룹도 출력        
        if(match.length > 1){
            let start = match.index;
            for(let i = 1; i < match.length; i++){
                if(match[i]){  // group 결과가 undefine 가 아닌 경우
                    console.log(`\t group(${i}): ${match[i]} {${start}~${start + match[i].length}}`);
                    start += match[i].length;
                }
            }
        }
    }
    
    (matchCount == 0) && console.log(" X매치 없슴X");
    
    console.log();
}*/

function test(regex, arrInput){
    for(input of arrInput) regExpTest(regex, input);
}


const inputs = [
    "Ab-7890-786-zuy",    // 유효한 쿠폰입니다
    "Ab-7890-786-zuyd",   // 유효한 쿠폰이 아닙니다
    "ki-2010-893-Zip",    // 유효한 쿠폰입니다
    "kit-2010-893-Zip",   // 유효한 쿠폰이 아닙니다
    "xX-1200-089-zuy",    // 유효한 쿠폰이 아닙니다
    "p9-324-389-zopl",    // 유효한 쿠폰이 아닙니다
];

//const regex = /[a-zA-Z]{2}-[1-9]{1}[0-9]{3}-[1-9]{1}[0-9]{2}-[a-zA-Z]{3}$/g;  // TODO: 정규표현식을 작성해보세요
const regex = /^[a-z]{2}-[1-9]\d{3}-[1-9]\d{2}-[a-z]{3}$/ig;  // TODO: 정규표현식을 작성해보세요

inputs.forEach((e) => {
   if(regex.test(e)){
        console.log("유효한 쿠폰입니다");
    } else {
        console.log("유효한 쿠폰이 아닙니다");
    }
    //test(regex, inputs);

});

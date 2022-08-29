/*******************************
 * 영어문장에서 각 단어 첫글자만 대문자 만들기
 */

const input = [
    "i am a PROGRAMMER",     // -> I Am A Programmer
    "THAT ELEPHANT IS BIG",  // -> That Elephant Is Big
]

function letterCapitalize(str){

    // 방법1
    // str = str.toLowerCase();   // 일단, 소문자로 변환.
    // let arr = str.trim().split(/\s+/);  // 공백으로 단어 쪼개기

    // let result = [];
    // for(let i = 0; i < arr.length; i++){  // 각 단어별로
    //     let first = arr[i].charAt(0);   // 첫글자
    //     let rest = arr[i].slice(1);     // 두번째 글자부터 (나머지)
    //     first = first.toUpperCase();    // 첫글자만 대문자로

    //     result.push(first + rest);    // 단어 합치기
    // }

    // return result.join(" ");


    // 방법2
    const result = [];
    str.split(/\s+/).forEach(e => {
        result.push(e[0].toUpperCase() + e.slice(1).toLowerCase());
    });
    return result.join(" ");
}

input.forEach(e => console.log(letterCapitalize(e)));
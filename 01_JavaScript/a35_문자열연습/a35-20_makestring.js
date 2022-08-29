/*******************************
 * 단어의 앞글자로만 만들어진 문자열 생성
 */

const input = [
    "The community at Code States might be the biggest asset", // -> TcaCSmbtba
    "i am a PROGRAMMER",     // -> iaaP
    "THAT ELEPHANT IS BIG",  // -> TEIB
]

function makeString(str){
    // TODO
    let result = "";
    str.split(" ").forEach(e => {
        result += e.slice(0, 1);
    });
    return result;
    
}

input.forEach(e => console.log(makeString(e)));
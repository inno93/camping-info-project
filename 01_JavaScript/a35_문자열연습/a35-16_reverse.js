/*******************************
 * 문자열 좌우 반전
 */

const input = [
    "abcde",            // edcba
    "I am a Student",   // tnedutS a ma I
]

function reverse(str){
    // TODO    
    str = str.split("").reverse().join("");
    return str;
  
}

input.forEach(e => console.log(reverse(e)));
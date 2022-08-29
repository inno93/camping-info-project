/*******************************
 * 가장 긴 단어 찾기
 */

const input = [
    "I am a Student",     // ->  Student
    "That elephant is big",  // -> elephant
]

function longestWord(str){

    // TODO
    str = str.split(" ");
   return  str.reduce((a , b) => a.length > b.length ? a : b);

}

input.forEach(e => console.log(longestWord(e)));
/*******************************
 * isogram : 중복글자 없는 단어
 * isogram 여부 판단하기 (true/false)
 */

const input = [
    "Dermatoglyphics", // -> true
    "programmer",      // -> false
    "Correct",         // -> false
    "isogram",         // -> true
]

function isIsogram(str){
    let tmp = "", flag = true;
    tmp = str.toLowerCase().split("");
    tmp.forEach((a) => { 
        if(str.toLowerCase().split(a).length != 2){
          flag = false;          
        }
    });
    // TODO
    return flag;
    
}

input.forEach(e => console.log(isIsogram(e)));
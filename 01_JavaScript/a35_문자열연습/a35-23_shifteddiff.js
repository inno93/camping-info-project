/*******************************
 * 문자열 시프팅 차이값
 */

const input = [
// [first, second]
    ["hello", "hello"],    // 0
    ["hello", "ohell"],    // 1
    ["hello", "lohel"],    // 2
    ["hello", "llohe"],    // 3
    ["hello", "elloh"],    // 4
    ["hello", "elohl"],    // -1

]

// 전통 for문 사용
/*

function shiftedDiff(first, second){

    // TODO
    let flag = false ,cnt = 0 ,str1 = "", str2 = "", result = [];
    
    if(first == second) return 0;
    result = second.split("");

    for(let i = 0; i < first.length; i++){
        str1 = result.shift();
        for(let j = 0; j < result.length; j++){                     
            str2 += result[j]; 
        }
        str2 += str1;
        cnt++;       
        if(first == str2){
            flag = true;
            break;
        }
        result = str2.split("");
        str2 = "";
    }  

    return first.length == cnt ? -1 : cnt;
}

input.forEach(e => console.log(shiftedDiff(e[0], e[1])));*/


//reduce 사용
function shiftedDiff(first, second){
    // TODO

    let str = [], stringValue = "" , cnt = 0;
   
    if(first == second) return 0;
    str = second.split("");
    
    second.split("").reduce((val, cur, i, arr) => {         
        let str2 = "";  
        
        str2 = str.shift(); 
        str.push(str2)   
        if(first == (str.join(""))) {
            cnt = i;
            arr.splice(1);
        }
        if(first.length - 1 == i  && cnt == 0) cnt = -1;
    });

    return cnt;

}
input.forEach(e => console.log(shiftedDiff(e[0], e[1])));
// console.log(shiftedDiff(input[1][0], input[1][1]));
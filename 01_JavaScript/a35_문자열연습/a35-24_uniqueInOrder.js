/*******************************
 * 연속되지 않은 글자출력 unique in order
 */

const input = [
    "all good tree",     //  [a,l, ,g,o,d, ,t,r,e]
]

function uniqueInOrder(str){
    // TODO
    let result = [];

    str.split("").reduce((a, b) =>{      
        if(a != b){
            result.push(b);
            return b;
        }        
        return a;
        
    }, "");
    return result;
}

input.forEach(e => console.log(uniqueInOrder(e)));
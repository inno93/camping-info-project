// 반지름은 입력받아
// 원의 둘레를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출

const circlePerimeter = function(radius){
    return 2 * Math.PI * radius;
}
let r, a ,p;
r = 10;
p = circlePerimeter(r);
console.log(`반지름 ${r}인 원의 둘레은 ${p.toFixed(2)} 입니다`);

// 반지름은 입력받아
// 원의 면적를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 

const circleArea = function(radius){
    return (radius **2) * Math.PI; 
}


a = circleArea(r);
console.log(`반지름 ${r}인 원의 면적은 ${a.toFixed(2)} 입니다`);

// 직사각형의 '가로', '세로' 의 크기를 입력받아
// 직사각형의 넒이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출

const rectangleArea = function(width, col){
    return width * col;

}

let w, c;
w = 10;
c = 15;
a = rectangleArea(w,c);
console.log(`가로 ${w}, 세로 ${c}인 직사각형의 넓이는 ${a} 입니다`);

// 직각삼각형의 '밑변'과 '높이'가 주어졌을때
// 빗변의 길이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출

const triangleArea = function(width, height){
    return (width ** 2 + height ** 2) ** (1/2);
}
let w1, h1, a1;
w1 = 3;
h1 = 4;
a1 = triangleArea(w1,h1);
console.log(`밑변 ${w1}, 높이 ${h1}인 직각삼각형의 빗면의 길이는 ${a1} 입니다`);


// 반지름은 입력받아
// 원의 '둘레'와 '면적'을 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 

const cirCle = function(radius){
    const result = {Perimeter : circlePerimeter(radius), Area : circleArea(radius)};
    return result;
}

let cir = cirCle(r);
console.log(`반지름 ${r}인 원의 둘레는 ${cir.Perimeter.toFixed(2)}이고 면적은 ${cir.Area.toFixed(2)} 입니다.`);

console.log("\n[프로그램 종료]", '\n'.repeat(20));
































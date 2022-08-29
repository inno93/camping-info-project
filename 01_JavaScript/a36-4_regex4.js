/* 대표적인 정규 표현식 
 *  구글링 하면 대표적인 정규표현식들이 많이 구할수 있습니다.
 *  각 정규표현식들을 작성해보고
 *	매칭되는 문자열과 그렇지 않은 것들을 출력해봅시다.   
 */

// 도우미 메소드
function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input); 

    if(regex.test(input)){
        console.log("   ⊙ 매칭⊙");
    } else {
        console.log(" X매치 없슴X");
    }
    console.log();
}

function test(regex, arrInput){
    for(input of arrInput) regExpTest(regex, input);
}

//--------------------------------------------------
let title, regex, arrInput;
console.log('[많이 쓰는 정규표현식]')

{
    //─────────────────────────────────────────
    title = "URL";
    regex = /^(http+(s+))?\:\/\/(\w+\.)+\w+/;
    arrInput = [
        "https://sports.news.naver.com",
        "https://sports.news.naver.com",
        "httpsnaver.com",
        "https://www.naver.com",
        "https://docs.google.com/document/d/1PPcdjT4woNIus4xMl3CkZ-8moRBTQo19vJ4o5Rg7M9c/edit",
        "https://google.com",

    ];
    console.log(title);
    test(regex, arrInput);


    //─────────────────────────────────────────
    title = "email";
    regex = /\w+@(\w+\.)+\w+/;
    arrInput = [
        "hih8904@naver.com",
        "dfmkas@hanmail.com",
        "google.com",
        "@sadas.com",
    ];
    console.log(title);
    test(regex, arrInput);
    
    //─────────────────────────────────────────
    title = "주민등록번호";
    regex = /\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])-[1-4]\d{6}/;
    arrInput = [
        "930821-1231321",
        "125161-987754",
        "515161-3988987",
        "12as5d-1151111",
        "111111-222222",
        "110315-1998887",
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "날짜 YYYY-MM-DD";
    regex = /\d{1,4}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[0-1])/;
    arrInput = [
        "2022-08-03",
        "2022-099-666",
        "20566-999-5",
        "1-12-01",
        "2000-1-01",
        "1949-01-2",
        "123a-01-04"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "자연수";
    regex = /^[1-9][0-9]*$/;
    arrInput = [
        123,
        -1,
        0.1,
        132,
        Math.log(3),
        22.44,
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "정수";
    regex =  /^-?[0-9]*$/;
    arrInput = [
        123,
        -1,
        0.1,
        132,
        Math.log(3),
        22.44,
        0,
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "소수";
    regex =  /^-?[0-9]*\.[0-9]*$/;
    arrInput = [
        123.111111111,
        -1,
        0.1,
        132,
        Math.log(3),
        22.44,
        0,
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "소수점 둘째자리까지";
    regex =  /^-?[0-9]*\.[0-9]{1,2}$/;
    arrInput = [
        123,
        -1.02,
        0.1,
        132.443,
        Math.log(3),
        22.44,
        0,
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "1000 단위 콤마 자연수";
    regex = /^(\d{1,3},)(\d\d\d,)*(\d\d\d)$/;
    arrInput = [
        "1,000",
        "2340",
        "1,222",
        "-1,2222222,444",
        "2323,44",
        "-1,000",
        "43",
        "1,,444",
        "242,444,4,2223",
        "1,243,3s2",
        "1,333,",
    ];
    console.log(title);
    test(regex, arrInput);
}



console.log("\n[프로그램 종료]");



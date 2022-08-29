/*
 * 22.08.17 캠핑장 정보 가져오기 JS
 */

let urlSearch = new URLSearchParams(location.search);
let page = urlSearch.get('page') == null ? 1 : urlSearch.get('page');


//캠핑장 전체 가져오기
var xhr = new XMLHttpRequest();
var appKey = `gmQchDJDvzA%2BuZgXFbpKOvwhz5uzY7mnPQWpiDawvXy52atdwhGRlGUYPoiYmVatagXUxCKwwoyEtSIki1Gu5g%3D%3D`;
var url = 'https://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ appKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent(page); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('9'); /**/
queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {       
        let jsonObj = JSON.parse(this.responseText);
        //console.log(jsonObj);
		parseJSON(jsonObj);
    }
};

xhr.send();


function parseJSON(jsonObj){
    let totalCount = jsonObj.response.body.totalCount;    
	const contents = [];
    let campData = "";
	//상세보기 이동을 위한 a 태그 추가 필요(22.08.18) 완료
	for(x of jsonObj.response.body.items.item){
        let img = x.firstImageUrl == "" ? "img/noImage.jpg" : x.firstImageUrl;
        campData += `<div class="col">
                        <div class="card w-70 h-100">
                            <img src="${img}" class="card-img-top h-50 " alt="${x.facltNm}">
                            <div class="card-body">
                                <h5 class="card-title">${x.facltNm}</h5>
                                <p class="card-text">${x.lineIntro}</p>
                                <p class="card-text">${x.addr1}</p>
                            </div>
                            <div class="card-footer bg-white border-white">
                                <a href="campDetail.html?contentId=${x.contentId}&mapX=${x.mapX}&mapY=${x.mapY}" class="btn btn-primary stretched-link">자세히 보기</a>
                            </div>
                        </div>
                    </div>`;        
	}

	document.getElementById('campData').innerHTML = campData;
    paging(page, totalCount);    
}

/*페이징 함수
    page : 현재 페이지 값
    totalCount : 전체 데이터 개수
    pageList : 한 화면에 나올 데이터 수 
    pageMax : 최대 생성될 페이지 개수
*/
function paging(page, totalCount){

    //변수 초기화
    const data = [];    
    const pageList = 9;
    const pageMax = 10;
    let pageCount = 0;
    let pagePlus = 0;
    let startPage = page;
    let pageData = "";

    //페이지 목록 초기화
    $("#paging").empty();

    //페이징 개수 확인
    if(totalCount > pageList){
        //생성될 페이지 수(소수점 버림)
        pageCount = Math.floor(totalCount / pageList);
        pagePlus = totalCount % pageList;
        if(pagePlus > 0) pageCount++;        
    }
    
    //전체 페이지와 비교해서 적용
    if(startPage > pageCount || startPage < 0) startPage = page;


    // [동적 ul 페이징 처리 실시]
    if(pageCount == 1){ //생성해야할 페이지가 1페이지인 경우   
        pageData += ` <li class='page-item'>
        <a class='page-link' href="camping.html?page=${pageCount}">${pageCount}</a></li>`;
        
    }
    else if(pageCount >= 2){ //생성해야할 페이지가 2페이지 이상인 경우
        // 이전 페이지 추가 실시 
        pageData += `
        <li class='page-item'>
            <a class="page-link" href="camping.html?page=${page - 1}" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>`;

        // 특정 1, 2, 3 .. 페이지 추가 실시
            var count = 1;
            for(var i=5; i>=1; i--){
                let active = "";
                if(page- i <= 0) continue; //선택된 페이지 앞 5페이지까지 보여주기
                if(count > pageMax) break; //최대로 생성될 페이지 개수가 된 경우 
                if(i == page) active = "active";
                pageData += `
                <li class="page-item ${active}">
                    <a class="page-link" href="camping.html?page=${page - i}">${page - i}</a>
                </li>`;
                count ++;
            }
            for(var i=startPage; i<=pageCount; i++){
                let active = "";
                if(i == page) active = "active";
                if(count > pageMax) break; //최대로 생성될 페이지 개수가 된 경우 
               
                pageData += `
                    <li class="page-item ${active}">
                        <a class="page-link" href="camping.html?page=${i}">${String(i)}</a>
                    </li>`;
                count ++;
            }

    

        // 다음 페이지 추가 실시
      pageData += `
        <li class='page-item'>
            <a class="page-link" href="camping.html?page=${parseInt(page) + 1}" aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>`;
    }
    
    document.getElementById('paging').innerHTML = pageData;

}


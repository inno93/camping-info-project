/*
 *  22.08.18 캠핑장 상세보기 JS
 */


//QueryString 가져오기

let urlSearch = new URLSearchParams(location.search);

let contentId = urlSearch.get('contentId');
let mapX = urlSearch.get('mapX');
let mapY = urlSearch.get('mapY');

//내 위치 (위도 경도)
let lng = "";
let lat = "";

const available = {
    "y" : "사용",
    "Y" : "사용",
    "n" : "미사용",
    "N" : "미사용",
};

//캠핑장 ID 없이 접근 했을 때 접근 방지
if(contentId == null) {
    alert("잘못된 접근입니다.");
    window.history.back();
}

//자신의 위도경도 구하기
(function location(){
    navigator.geolocation.getCurrentPosition(
        function(position) {       
            lat = position.coords.latitude;
            lng = position.coords.longitude;
        }, 
    );                
 })();
 
//위치 기반정보 목록 조회
var xhr = new XMLHttpRequest();
var url = 'http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/locationBasedList'; /*URL*/
var appKey = `gmQchDJDvzA%2BuZgXFbpKOvwhz5uzY7mnPQWpiDawvXy52atdwhGRlGUYPoiYmVatagXUxCKwwoyEtSIki1Gu5g%3D%3D`;
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ appKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
queryParams += '&' + encodeURIComponent('mapX') + '=' + encodeURIComponent(mapX); /**/
queryParams += '&' + encodeURIComponent('mapY') + '=' + encodeURIComponent(mapY); /**/
queryParams += '&' + encodeURIComponent('radius') + '=' + encodeURIComponent('0'); /**/
queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonObj = JSON.parse(this.responseText);
        locationBasedList(jsonObj);
    }
};

xhr.send();


//이미지정보 목록 조회

var xhr1 = new XMLHttpRequest();
url = 'http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList'; /*URL*/
queryParams = '?' + encodeURIComponent('serviceKey') + '='+ appKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
queryParams += '&' + encodeURIComponent('contentId') + '=' + encodeURIComponent(contentId); /**/
queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/
xhr1.open('GET', url + queryParams);
xhr1.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonObj = JSON.parse(this.responseText);
        imageList(jsonObj);
    }
};

xhr1.send();

//위치 기반정보 JSON 데이터 처리 함수 
function locationBasedList(jsonObj){ 

    const content = [];
    let data = jsonObj.response.body.items.item;
    //이름 및 주소
    content.push(`
    
        <div class="p-3 bg-dark text-white rounded">
            <h1>${data[0].facltNm}</h1>
            <p>${data[0].addr1 + " " + data[0].addr2}</p>
        </div>
    `);
   
    //소개
    content.push(`
        <div class="p-3 bg-dark text-white rounded">
        <h1>소개</h1>
        <p>${data[0].intro}</p>
        </div>
    `);

    //문의 및 예약
    content.push(`<h2>문의 및 예약</h2>`);
    content.push(`
       <div class="row">
            <div class="col-6 bg-light text-center pt-3"><p><strong>예약 구분</strong></p></div>
            <div class="col-6 bg-light text-center pt-3"><p><strong>문의</strong></p></div>
       </div>
       <div class="row">
            <div class="col-6 text-center">${data[0].resveCl}</div>
            <div class="col-6 text-center">${data[0].tel}</div>
       </div>
       <div class="row">
            <div class="col-12 bg-light text-center pt-3"><p><strong>홈페이지</strong></p></div>          
        </div>
       <div class="row">
            <div class="col-12 text-center"><a href="${data[0].homepage}" target="_blank">${data[0].homepage}</a></div>          
        </div>
    `);

    //운영 정보
    content.push(`<h2>운영 정보</h2>`);
    content.push(`
       <div class="row">
            <div class="col-6 bg-light text-center pt-3"><p><strong>업종</strong></p></div>
            <div class="col-6 bg-light text-center pt-3"><p><strong>인허가일자</strong></p></div>
       </div>
       <div class="row">
            <div class="col-6 text-center">${data[0].induty}</div>
            <div class="col-6 text-center">${data[0].prmisnDe}</div>
       </div> 
       <div class="row">
            <div class="col-6 bg-light text-center pt-3"><p><strong>영업배상 책임보험</strong></p></div>
            <div class="col-6 bg-light text-center pt-3"><p><strong>애완동물 출입</strong></p></div>
        </div>
        <div class="row">
            <div class="col-6 text-center">${available[data[0].insrncAt]}</div>
            <div class="col-6 text-center">${data[0].animalCmgCl}</div>
        </div> 
        <div class="row">
            <div class="col-6 bg-light text-center pt-3"><p><strong>사업주체</strong></p></div>
            <div class="col-6 bg-light text-center pt-3"><p><strong>운영 및 관리</strong></p></div>
        </div>
        <div class="row">
            <div class="col-6 text-center">${data[0].facltDivNm}</div>
            <div class="col-6 text-center">${data[0].mangeDivNm}</div>
        </div> 
        <div class="row">
            <div class="col-6 bg-light text-center pt-3"><p><strong>운영기간</strong></p></div>
            <div class="col-6 bg-light text-center pt-3"><p><strong>운영일</strong></p></div>
        </div>
        <div class="row">
            <div class="col-6 text-center">${data[0].operPdCl}</div>
            <div class="col-6 text-center">${data[0].operDeCl}</div>
        </div>
        <div class="row">
            <div class="col-4 bg-light text-center pt-3"><p><strong>화장실</strong></p></div>
            <div class="col-4 bg-light text-center pt-3"><p><strong>샤워실</strong></p></div>
            <div class="col-4 bg-light text-center pt-3"><p><strong>개수대</strong></p></div>
        </div>
        <div class="row">
            <div class="col-4 text-center">${data[0].toiletCo}개</div>
            <div class="col-4 text-center">${data[0].swrmCo}개</div>
            <div class="col-4 text-center">${data[0].wtrplCo}개</div>
        </div>
       <div class="row">
            <div class="col-12 bg-light text-center pt-3"><p><strong>부대시설</strong></p></div>          
        </div>
       <div class="row">
            <div class="col-12 text-center">${data[0].sbrsCl}</div>          
        </div>
    `);
    
    document.getElementById('detail').innerHTML = content.join('\n');

    let addr = data[0].addr1.split(" ");
    let addrPara = addr.reduce((accumulator, current) => accumulator + "+" + current);
    
    //구글 지도 그려주기
    let mapProp = {
        // center: 지도 표현 중심좌표
        center : new google.maps.LatLng(mapY, mapX),
        //zoom level 
        zoom: 17,
    }
    let map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    let position = { lat: parseFloat(mapY), lng: parseFloat(mapX)};
  
    let marker = new google.maps.Marker({
        position : position,        
    });
    marker.setMap(map);
    let infowindow = new google.maps.InfoWindow({
        content: `
        <div class="card " style="width: 30rem;">
            <div class="row g-0">
                <div class="col ratio ratio-4x3">
                    <img src="${data[0].firstImageUrl}" class="img-fluid rounded-start" alt="${data[0].facltNm}">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">${data[0].facltNm}</h5>
                        <p class="card-text">${data[0].addr1 + " " + data[0].addr2}</p>
                        <a href="https://google.co.kr/maps/dir/${lat},${lng}/${addrPara}" class="btn btn-primary" target="_blank">길찾기</a>
                    </div>
                </div>
            </div>
        </div>
        `,		
    });
    //infowindow.open(map, marker);
    
    marker.addListener("click", function(){
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}


//이미지정보 JSON 데이터 처리 함수 
function imageList(jsonObj){

    const content = [];
    content.push(`<div class="carousel-indicators">`);
    for(let i =0; i < jsonObj.response.body.numOfRows; i++){
      let active = '';
      if(i == 0 ) active = 'active';
      content.push(`<button type="button" data-bs-target="#demo" data-bs-slide-to="${i}" class="${active}"></button>`);
    }

    content.push(`</div>`)
    content.push(`<div class="carousel-inner">`)
    let tmp = "active";

    //이미지가 있는 경우만 
    if(jsonObj.response.body.totalCount > 0){
        for(x of jsonObj.response.body.items.item){
            content.push(` 
            <div class="carousel-item ${tmp} ratio ratio-21x9">
                <img src="${x.imageUrl}" alt="" class="img-thumbnail rounded mx-auto d-block">
            </div>`);
            tmp = "";
        }
    }else{
        content.push(` 
        <div class="carousel-item ${tmp} ratio ratio-21x9">
            <img src="./img/noImage.jpg" alt="" class="img-thumbnail rounded mx-auto d-block">
        </div>`);
    }

    content.push(`</div>`);
    content.push(`
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        </button>
    `);
    document.getElementById('demo').innerHTML = content.join('\n');

}
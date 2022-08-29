(function(){
    //바다
    let $waterFront = $('#water-front');
    let $waterBack = $('#water-back');

    (function loopSea(){
        $waterFront
            .animate({'bottom': '-65px', 'left' : '-30px'}, 500)
            .animate({'bottom': '-60px', 'left': '-25px'}, 500)
            ;
        $waterBack
        .animate({'bottom': '15px', 'left' : '-20px'}, 500)
        .animate({'bottom': '10px', 'left': '-25px'}, 500)
        ;
    
        $.when($waterFront, $waterBack).done(loopSea);
        //무한루프 아니다! 재귀호출 아니다!
    })();
    
    // 구름
    let $cloud1 = $("#cloud-group-1");
    let $cloud2 = $("#cloud-group-2");
    (function loopCloud(){
        $cloud1
            .animate({'left': '-720px'},10000, "linear")
            .animate({'left': '0px'},0);
            // easing 값 : "swing", "linear"
            // https://api.jquery.com/animate/#easing
    
        $cloud2
            .animate({'left' : '0px'}, 10000, "linear")
            .animate({'left' : '720px'}, 0, loopCloud);        
    })();


    // 보트 & 타이틀 & 폼
    let $boat = $('#boat');
    let $questionMark = $('#question-mark');
    let $title1 = $("#title1");
    let $title2 = $("#title2");
    let $form = $("#form");

    $boat.css({'left': '-220px'});
    $questionMark.css({'opacity': 0});
    $title1.css({'opacity' : 0});
    $title2.css({'opacity' : 0});
    $form.css({'left' : '370px'});

    //방법 1  : animate() + callback
    /*
    $boat.animate({'left': '20px'}, 2000, function(){ //$boat 등장
        loopBoat(); // $boat 두둥실
        $questionMark.delay(500).animate({'opacity': 1}, 1000, function(){ //$questionMark 등장
            $title1.animate({'opacity' : 1}, 1000, function(){ //$title1 등장
                $title2.animate({'opacity' : 1}, 1000,function(){ // $title2 등장
                    $form.animate({'left' : 0}, 500); // $form 등장
                });// end $title2
            });// end $title1
        }); // end $questionMark
    }); // end $boat

    */

    //↑ callback hell 발생
    // 단점 : 코드 가독성, 유지보수성 악화.

    
    //방법2 : when() .then() ... 사용
    // when()은 Promose 객체를 리턴
    // Thenable object
    /*
    $.when($boat.animate({'left': '20px'}, 2000))
        .then(function(){
            loopBoat();
            return $.when($questionMark.delay(500).animate({'opacity': 1}, 1000));
        })
        .then(function(){
            return $.when($title1.animate({'opacity' : 1}, 1000));
        })
        .then(function(){
            return $.when($title2.animate({'opacity' : 1}, 1000));
        })
        .then(function(){
            $form.animate({'left' : 0}, 500);
        })
    */
    
    //방법3 : '단일 object' 애니메이션의 경우 promise() 만으로도 가능.
    //즉 $.when()을 사용하지 않아도 된다.
    $boat.animate({'left': '20px'}, 2000).promise()
    .then(function(){
        loopBoat();
        return $questionMark.delay(500).animate({'opacity': 1}, 1000).promise();
    })
    .then(function(){
        return $title1.animate({'opacity' : 1}, 1000).promise();
    })
    .then(function(){
        return $title2.animate({'opacity' : 1}, 1000).promise();
    })
    .then(function(){
        $form.animate({'left' : 0}, 500);
    })

    // .then(), .done() 차이
    // done(func) : 성공 시 콜백함수 지정
    // then(success, fail) : 성공 시와 실패 시의 콜백함수 지정
    // 참조 : https://api.jquery.com/jQuery.when/


    function loopBoat(){
        $boat
            .animate({'bottom': '15px'}, 500)
            .animate({'bottom': '25px'}, 500, loopBoat);
        
    }
    



})();
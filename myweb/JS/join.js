
$(document).ready(function(){
    //다음 우편번호 + 주소 찾기
    $("#findPost").click(function(){
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
    
                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수
    
                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }
    
                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다. 
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("addr1").value = extraAddr;
                
                } else {
                    document.getElementById("addr1").value = '';
                }
    
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('post').value = data.zonecode;
                document.getElementById("addr1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("addr2").focus();
            }
        }).open();
    });

    //회원가입 유효성검사

    $("#join").click(function(){
        let hpReg = /[0-9]{4}/;

        if($("#uid").val() == ""){
            alert("아이디를 입력하세요");
            $("#uid").focus();
            return false;            
        }else if($("#pwd").val() == ""){
            alert("비밀번호를 입력하세요");
            $("#pwd").focus();
            return false;
        }else if($("#pwdchk").val() == ""){
            alert("비밀번호를 입력하세요");
            $("#pwdchk").focus();
            return false;
        }else if($("#pwd").val() != $("#pwdchk").val()){
            alert("비밀번호가 일치하지 않습니다");
            $("#pwdchk").focus();
            return false;
        }else if($("#uname").val() == ""){
            alert("이름을 입력하세요");
            $("#uname").focus();
            return false;
        }else if($("input[name='gender']:checked").length < 1){
            alert("성별을 선택해주세요");
            $("#gender1").focus();
            return false;
        }else if($("#hp1 option:selected").val() == ""){
            alert("휴대폰 앞자리를 선택해 주세요");
            $("#hp1").focus();
            return false;
        }else if($("#hp2").val() == ""){
            alert("휴대폰 번호를 입력해 주세요");
            $("#hp2").focus();
            return false;
        }else if(!hpReg.test($("#hp2").val())){
            alert("휴대폰 번호는 숫자 4자리만 입력가능합니다");
            $("#hp2").focus();
            return false;

        }else if(!hpReg.test($("#hp3").val())){
            alert("휴대폰 번호는 숫자 4자리만 입력가능합니다");
            $("#hp3").focus();
            return false;

        }else if($("#hp3").val() == ""){
            alert("휴대폰 번호를 입력해 주세요");
            $("#hp3").focus();
            return false;
        }else if($("#post").val() == "" || $("#addr1").val() == ""){
            alert("주소를 검색해주세요");
            $("#findPost").trigger("click");
            return false;
        }else if($("#addr2").val() == ""){
            alert("상세주소를 입력해주세요");
            $("#addr2").focus();
            return false;
        }

        $("#hp").val($("#hp1 option:selected").val() + "-" + $("#hp2").val() + "-" + $("#hp3").val());
        $("input[name='post']").val($("#post").val());
        $("input[name='addr1']").val($("#addr1").val());

        alert("회원가입이 완료되었습니다. 가입한 계정으로 로그인하시기 바랍니다.");
    })


    //회원가입 취소 
    $("#cancel").click(function(){
        window.history.back();
    })

    //비밀번호 확인 
    $("#pwdchk").keyup(function(){
        if($(this).val() == $("#pwd").val()){
            $("#noticePwd").css("color", "blue");
            $("#noticePwd").css("fontSize", "12px");
            $("#noticePwd").text("비밀번호가 일치합니다");
        }else{
            $("#noticePwd").css("color", "red");            
            $("#noticePwd").css("fontSize", "12px");
            $("#noticePwd").text("비밀번호가 일치하지 않습니다");
        }
    });
})



$(document).ready(function(){
    $("#login").click(function(){
        if($("#uid").val() == ""){
            alert("아이디를 입력하세요");
            $("#uid").focus();
            return false;            
        }else if($("#pwd").val() == ""){
            alert("비밀번호를 입력하세요");
            $("#pwd").focus();
            return false;
        }

        alert($("#uid").val() + "님 환영합니다.");
    
    });

})

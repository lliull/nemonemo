$(document).ready(function(){
    $(".loginImg").click(function(){
        console.log($(".loginBoxId").val());
        if($(".loginBoxId").val().trim() == ""){
            alert("아이디를 입력하세요");
        }else if($(".loginBoxPw").val().trim() == ""){
            alert("비밀번호를 입력하세요");
        }
        location.href = 'index.html';
    });
});

$(document).ready(function(){
    function chkPW(){
        var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        var pw = $("#userPw").val();
        if(false === reg.test(pw)) {
        $("#userPwCheck").html('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
        }else{
        console.log("통과");
        }
    }
});


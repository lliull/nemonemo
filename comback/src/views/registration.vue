<template>
  <div class=fullContainer>
          <div class=firstContainer>
    <a href="javascript:history.back();" ><img src="../assets/img/back.png"></a>
    <router-link to="/home"><h1><img id="logo" src="../assets/logo.png"></h1></router-link>
    <router-link to="/login"  style="visibility:hidden">로그인</router-link>
    </div>
    <form>
        <div>
            <label class="regLabel" for="userId">아이디</label>
            <input class="loginBox" v-model="userId" id="userId" type="text" placeholder="ID">
        </div>
        <div>
            <label class="regLabel" for="userPw">비밀번호</label>
            <input class="loginBox" v-model="userPw" id="userPw" type="password" placeholder="password">
            <span id="userPwCheck"></span>
        </div>
        <div>
            <label class="regLabel" for="pwCheck">비밀번호 확인</label>
            <input class="loginBox" v-model="pwCheck" id="pwCheck" type="password" placeholder="password">
        </div>
        <div>
            <label class="regLabel" for="userName">이름</label>
            <input class="loginBox" v-model="userName" id="userName" placeholder="이름">
        </div>
        <div>
            <label class="regLabel" for="userNick">닉네임</label>
            <input class="loginBox" v-model="userNick" id="userNick" placeholder="닉네임">
        </div>
        <div>        
            <label class="regLabel" for="userEmail">이메일</label>
            <input class="loginBox" v-model="userEmail" id="userEmail" type="email"  placeholder="ex) @naver.com">
        </div>
        <div>
            <label class="regLabel" for="birthday">생년월일</label>
            <input class="loginBox" v-model="birthday" id="birthday" type="text" placeholder="YYYYMMDD">
        </div>
            <label class="regLabel">성별</label>
        <div class="genderCheck">
            <span>
            <input type="radio" id="male" value="male" v-model="userGender">
            <label for="male">남자</label>
            </span>
            <span>
            <input type="radio" jd="female" value="female" v-model="userGender">
            <label for="female">여자</label></span>
        </div>
        </form>
        <div v-if="show"></div>
        <div class="clause" v-else>
            또왔어 개인정보 처리방침
            <br>
            <br>
            정보통신망 이용촉진 등에 관한 법률 등 관련 법률에 의한 개인정보 보호규정 및 정보통신부가 제정한 개인정보지침을 준수하고 있습니다.
            <br>
            1. 개인정보의 수집 항목<br>
            원활한 서비스 이용과 고객과의 소통을 위해 수집합니다.<br>
            • 필수항목: 아이디, 비밀번호, 이메일, 닉네임<br>
            • 자동수집항목: IP 주소, 접속 기록, 쿠키 등<br>
            <br>
            2. 개인정보 보유 및 이용기간<br>
            - 가입 회원정보는 탈퇴할 시 3년간 보관 후 파기됩니다.<br>
            - 단, 게시물 및 댓글의 내용은 사이트 폐쇄 시까지 보관합니다.<br>
            - 악성 사용자 재가입을 막기 위해, 단일 암호화 기법으로 해쉬 방식으로 일부 개인정보의 해쉬를 영구적으로 저장하여 가입 제한을 할 수 있다(이 때 개인정보 자체는 정장되지 않음).<br>
            <br>
            3. 개인정보의 수집 이용 목적<br>
            • 아이디, 비밀번호, 이메일, 닉네임 : 회원 가입시에 사용자확인, 중복가입 방지, 부정 이용 방지를 위한 목적으로 사용합니다.<br>
            • 이용자의 IP 주소, 접속 기록 등: 불량회원의 부정 이용방지와 비인가 사용방지, 통계학적 분석에 사용합니다.<br>
        </div>
        <a class=login v-on="submitBtn">회원가입 </a>
           <input type="checkbox"><a @click="openClause">개인정보처리방침</a>에 동의 합니다.
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
    data() {
        return {
            userId: '',
            userPw: '',
            pwCheck: '',
            userName: '',
            userNick: '',
            userEmail: '',
            birthday: '',
            userGender: '',
            show: true
        };
    },
    methods: {
        submitBtn() {
            let form = new FormData() 
                form.append('id', this.userId) 
                form.append('pw', this.userPw)
                form.append('name', this.userName)
                form.append('nick', this.userNick)
                form.append('email', this.userEmail)
                form.append('birth', this.birthday)
                form.append('gender', this.userGender)
            axios.post('https://domain/form-post-url', form)
                .then((response) => {
                    })
                .catch((error) => {
                    })
        },
        openClause() {
            this.show = !this.show
        }
    }
}
</script>
<style>
.regLabel{
    display: block;
    width: 100px;
    float: left;
    text-align: right;
    margin: 0 auto;
    height: 20px;
    padding-left: 30px;
    margin-top: 20px;
}
.genderCheck{
    width: 400px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 53px;
}
.clause{
    width:500px;
    height: 200px;
    overflow: auto;
    margin: 50px auto;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: left;
}
</style>

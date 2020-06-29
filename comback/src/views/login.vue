<template>
  <div class=fullContainer>
    <div class=firstContainer>
    <a href="javascript:history.back();" ><img src="../assets/img/back.png"></a>
    <router-link to="/home"><h1><img id="logo" src="../assets/logo.png"></h1></router-link>
    <a style="visibility:hidden">로그인</a>
    </div>
      <form>
        <input class="loginBox loginBoxId" type="text" placeholder="ID">
        <input class="loginBox loginBoxPw" type="password" placeholder="password">
      </form>
    <a class=login>로그인</a>
    <div class="loginSubContainer">
      <span><a>아이디</a>/<a>비밀번호 찾기</a></span>
            <router-link to="/registration"><a id="res">회원가입</a></router-link>
    </div>

  </div>
</template>
<style scoped>
form{
  margin-top: 30px;
}

</style>
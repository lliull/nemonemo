<template>
  <div class=fullContainer>
    <div class=firstContainer>
    <a href="javascript:history.back();" ><img src="../assets/img/back.png"></a>
    <router-link to="/home"><h1><img id="logo" src="../assets/logo.png"></h1></router-link>
    <router-link to="/login">로그인</router-link>
    </div>
      <a class=my><span><img src="../assets/img/my.png"> 현재 위치</span></a><br>
      <router-link to="/areaCategory"><img class=menu src="../assets/img/area.jpg"></router-link>
      <a><img class=menu src="../assets/img/myArea.jpg"></a>
  </div>
</template>

<script>
export default {

};
</script>

<style>
@font-face { font-family: 'yg-jalnan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'BBTreeGR'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGR.woff') format('woff'); font-weight: normal; font-style: normal; }
a{
  all: none;
}
.fullContainer{
    width: 600px;
    margin: 0 auto;
}
.firstContainer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.menu{
  width: 300px;
  padding-top: 15px;
}
.my{
  width: 600px;
  text-align: left;
  float: left;
}
.my img{
  width: 15px;
}
#logo{
  width: 200px;
}
.loginBox{
  all: none;
  width: 376px;
  height: 40px;
  border-radius: 40px;
  padding-left: 20px;
  border: 2px solid #DE4778;
  margin: 10px auto;
}
.login{
display: block;
background-color: #DE4778;
color:white;
width: 400px;
height: 40px;
border-radius: 10px;
font-family: 'yg-jalnan';
font-size: 15pt;
line-height: 40px;
margin: 30px auto 10px auto;
}
.loginSubContainer{
font-family: 'BBTreeGR';
color: gray;
font-size: 12pt;
width: 400px;
margin: 0 auto;
display: flex;
justify-content: space-between;
}
#res{
  text-align: right;
  }
</style>
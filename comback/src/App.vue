<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">홈</router-link> |
      <router-link to="/login">로그인</router-link> | 
      <router-link to="/registration">회원가입</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
#app {
 font-family: 'BBTreeGR';
  text-align: center;
  color: #2c3e50;
}
a{
  all: none;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

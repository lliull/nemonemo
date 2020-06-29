<template>
    <div class=fullContainer>
        <div class=firstContainer>
        <a href="javascript:history.back();" ><img src="../assets/img/back.png"></a>
        <router-link to="/home"><h1><img id="logo" src="../assets/logo.png"></h1></router-link>
        <a style="visibility:hidden">로그인</a>
        </div>
        <p>지역선택</p>
        <div class="areaList">
            <a>종로구</a>
            <a>중구</a>
            <a>용산구</a>
            <a>성동구</a>
            <a>광진구</a>
            <a>동대문구</a>
            <a>중랑구</a>
            <a>성북구</a>
            <a>강북구</a>
            <a>도봉구</a>
            <a>노원구</a>
            <a>은평구</a>
            <a>서대문구</a>
            <a>마포구</a>
            <a>양천구</a>
            <a>강서구</a>
            <a>구로구</a>
            <a>금천구</a>
            <a>영등포구</a>
            <a>동작구</a>
            <a>관악구</a>
            <a>서초구</a>
            <a>강남구</a>
            <a>송파구</a>
            <a>강동구</a>
        </div>
    </div>
</template>
<style>
.areaList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.areaList a{
display: block;
width: 110px;
height: 40px;
margin: 0 auto;
border-radius: 10px;
background-color: #f2f2f2;
font-size: 13pt;
line-height: 40px;
margin-top: 10px;
}
</style>
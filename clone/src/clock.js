const clockContainer = document.querySelector(".js-clock"); 
//js-clock html 클래스명 불러오기
const clockTitle = clockContainer.querySelector("h1");
//컨테이너 안에 h1태그 불러오기



function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours(); 
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function init(){
	getTime();
	setInterval(getTime, 1000);
}


init();

function handleClick(){
	title.style.color = "blue";
}
function handleClick11(){
	title.style.color = "red";
}

title2.addEventListener("click",handleClick11);
title.addEventListener("click", handleClick);
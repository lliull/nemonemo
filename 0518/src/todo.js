const titleTodo = document.querySelector("#titleTodo");
let myTodoText = document.querySelector("#myTodo");
let myCheckList = document.querySelector("#checkList");
const myTagCount = document.querySelector("#tagCount"); 
document.querySelector("#btnCon").style.display = 'none';




function enterKey(){
    if(event.keyCode == 13){
        if(myTodoText.value.trim() == ""){
            alert("내용을 입력하세요");
            myTodoText.value = "";
        }else{
        const pTag = document.createElement('p');
        const pText = document.createTextNode(myTodoText.value);
        pTag.classList.add('todoPTag');
        pTag.style.display = null;
        pTag.innerHTML = "<label class='checkTodoImg'></label>" + myTodoText.value + "<a class='delBtn' onclick='parentElement.remove()'> X </a>"  ;
        myCheckList.appendChild(pTag);
        myTodoText.value = "";
        pTag.addEventListener('click', checkClick)
        myCheckList.insertBefore(pTag, myCheckList.firstChild);
        myTagCount.innerHTML = "todo list count " + myCheckList.childElementCount;
            if(myCheckList.childElementCount > 0){
                document.querySelector("#btnCon").style.display ='flex';
            }
        }
    }
}

//const pTagClick = document.querySelectorAll('p');



function checkClick(p){
    this.querySelector('.checkTodoImg').style.backgroundColor = "gray";
    this.style.color = "#f2f2f2";
    this.style.textDecoration = "line-through";
    for(let i = 0; i > myCheckList.childElementCount; i++){
        
        if(this.style.color == '#f2f2f2'){
            
            myTagCount.innerHTML = - i;
        }
    }
}
const titleTodo = document.querySelector("#titleTodo");
let myTodoText = document.querySelector("#myTodo");
let myCheckList = document.querySelector("#checkList");
const myTagCount = document.querySelector("#tagCount"); 
document.querySelector("#btnCon").style.display = 'none';
const myTodoPTagCheck = document.querySelector("#todoPTagCheck")




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



function checkClick(){
    this.querySelector('.checkTodoImg').style.backgroundColor = "gray";
    this.style.color = "#f2f2f2";
    this.style.textDecoration = "line-through";
    this.classList.replace('todoPTag', 'todoPTagCheck');
    let todoCheck = document.querySelectorAll("todoPTagCheck");
    myTagCount.innerHTML = "todo list count " + (myCheckList.childElementCount -- );
}
    // for(let i = 0; i > myCheckList.childElementCount; i++) 


const titleTodoBtn = document.querySelector("#titleTodoImg");
function titleBtnClick(){
    let allCheck = document.querySelectorAll('.checkTodoImg');
    for(let j = 0; j < allCheck.length; j++){
    allCheck[j].parentElement.style.color = "#f2f2f2"; 
    allCheck[j].parentElement.style.textDecoration = "line-through";
    allCheck[j].parentElement.classList.replace('todoPTag', 'todoPTagCheck');
    }
    let allCheckBack = document.querySelectorAll('.checkTodoImg');
    for(let i = 0; i < allCheckBack.length; i++){
        allCheckBack[i].style.backgroundColor = "gray";
    }
}


titleTodoBtn.addEventListener('click', titleBtnClick);


const activeBtnClick = document.querySelector("#activeBtn");
function activeBtnClickEvent(){
    let checkedList = document.querySelectorAll(".todoPTagCheck");
    for(let i = 0; i < checkedList.length; i++){
        checkedList[i].display = "none"; 
    }
}

activeBtnClick.addEventListener('click', activeBtnClickEvent);
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

function checkClick(){
    this.querySelector('.checkTodoImg').style.backgroundColor = "gray";
    this.style.color = "#f2f2f2";
    this.style.textDecoration = "line-through";
    this.classList.replace('todoPTag', 'todoPTagCheck');
    let todoCheck = document.querySelectorAll("todoPTagCheck");
    myTagCount.innerHTML = "todo list count " + (myCheckList.childElementCount -- );
}

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
    let uncheckedList = document.querySelectorAll(".todoPTag");
    for(let aci = 0; aci < checkedList.length; aci++){
        checkedList[aci].style.display = "none"; 
    }
    for(let acj = 0; acj < uncheckedList.length; acj++){
        uncheckedList[acj].style.display = "block";
    }
}
activeBtnClick.addEventListener('click', activeBtnClickEvent);

const comBtnClick = document.querySelector("#comBtn");
function comBtnClickEvent(){
    let checkedList = document.querySelectorAll(".todoPTagCheck");
    let uncheckedList = document.querySelectorAll(".todoPTag");
    for(let coi = 0; coi < uncheckedList.length; coi++){
        uncheckedList[coi].style.display = "none"; 
    }
    for(let coj = 0; coj < checkedList.length; coj++){
        checkedList[coj].style.display = "block";
    }
}
comBtnClick.addEventListener('click', comBtnClickEvent);

const allBtnClick = document.querySelector("#allBtn");
function allBtnClickEvent(){
    let checkedList = document.querySelectorAll(".todoPTagCheck");
    let uncheckedList = document.querySelectorAll(".todoPTag");
    for(let i = 0; i < checkedList.length; i++){
        checkedList[i].style.display = "block"; 
    }
    for(let i = 0; i < uncheckedList.length; i++){
        uncheckedList[i].style.display = "block"; 
    }
}
allBtnClick.addEventListener('click', allBtnClickEvent);

const resBtnClick = document.querySelector("#resetBtn");
function resBtnEvent(){
    myCheckList.remove();
}

resBtnClick.addEventListener('click', resBtnEvent);
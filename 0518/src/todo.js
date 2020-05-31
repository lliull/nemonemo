const titleTodo = document.querySelector("#titleTodo");
let myTodoText = document.querySelector("#myTodo");
let myCheckList = document.querySelector("#checkList");
const myTagCount = document.querySelector("#tagCount")



function enterKey(){
    if(event.keyCode == 13){
        const pTag = document.createElement('p');
        const pText = document.createTextNode(myTodoText.value);
        pTag.innerHTML = "<label id='titleTodoImg'>   </label>" + myTodoText.value;
        myCheckList.appendChild(pTag);
        myTodoText.value = "";
        myCheckList.insertBefore(pTag, myCheckList.firstChild);
        myTagCount.innerHTML = "todo list count" + myCheckList.childElementCount;
        }
}


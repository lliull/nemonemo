const titleTodo = document.querySelector("#titleTodo");
const P = document.querySelector(".todoParents");
//const addForm = document.createElement(".checkList");
let myTodoText = document.querySelector("#myTodo");
let myCheckList = document.querySelector("#checkList");



function enterKey(){
    if(event.keyCode == 13){
        myCheckList.innerHTML = myTodoText.value;
        const pTag = document.createElement('p');
        const pText = document.createTextNode(myTodoText.value)
        pTag.appendChild(pText)
        console.log(pTag)
        // document.getElementById('#checkList').appendChild(pTag);
        //P.appendChild(<p></p>);
        console.log(myTodoText.value)
        myTodoText.value = "";
    }
}



//myTodoText.innerHTML = "";

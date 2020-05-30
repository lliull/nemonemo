const titleTodo = document.querySelector("#titleTodo");
//const addForm = document.createElement(".checkList");
let myTodoText = document.querySelector("#myTodo");
let myCheckList = document.querySelector("#checkList");



function enterKey(){
    if(event.keyCode == 13){
console.log("엔터확인")
       myCheckList.innerHTML = myTodoText.value;
    }
        //console.log(myTodoText);
        //console.log("엔터확인 이프문확인");
//console.log("엔터확인");
}



//myTodoText.innerHTML = "";

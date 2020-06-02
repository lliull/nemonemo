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
        pTag.style.display = null;
        pTag.innerHTML = "<label id='checkTodoImg'>   </label>" + myTodoText.value + "<a id='delBtn' onmouseover='delBtnOver()' onclick='parentElement.remove()'> X </a>"  ;
        //document.querySelector("#delBtn").style.display = "none";
        myCheckList.appendChild(pTag);
        myTodoText.value = "";
        myCheckList.insertBefore(pTag, myCheckList.firstChild);
        myTagCount.innerHTML = "todo list count " + myCheckList.childElementCount;
            if(myCheckList.childElementCount > 0){
                document.querySelector("#btnCon").style.display ='flex';
            }
        }
    }
}



function delBtnOver(){
     document.querySelector("#delBtn").style.display = 'flex';
 }


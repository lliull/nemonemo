const idEnter = document.getElementById("idEnter"); 
const psEnter = document.getElementById("psEnter");
const loginBtn = document.getElementById('login');



const user = [{
   name: "민혜",
   id: "apple",
   ps: "1234"
},{
	name: "진수",
      id: "apple1",
      ps: "1234"
   }, {
         name: "아람",
         id: "apple2",
         ps: "1234"
      }
];



//console.log(loginBtn);
let count = 0;
//console.log("첫번째" + flag);

function aa(){
   //console.log("여기");
   //console.log(idEnter.value);
   //console.log(psEnter.value);
   //console.log(user.length);
   //console.log("두번째" + flag);
   
   for(i = 0; i < user.length; i++){
     // alert("여기"+i +user[i].id + ": " + user[i].ps + "콘솔은" + idEnter.value + "  " + psEnter.value);
      if(idEnter.value == user[i].id && psEnter.value == user[i].ps){
		 location.href = "main.html";
		 
		 
         //console.log("여2");
      }else{
         count++;
         
      }
   } //console.log("세번째" + flag);
   if(count == user.length){
	   alert("틀림");
	   
	   idEnter.value = null;
	   psEnter.value = null;
   }
};

loginBtn.addEventListener("click", aa);
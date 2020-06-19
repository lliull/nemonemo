<template>
    <div>
        <h1> todo List </h1>
        <input type="text" v-model="myTodo" @keyup.enter="todoPush" />
        <ul>
            <li class="checkList" v-for="(myTodo, i) in myList" v-on:click="addClick(myList[i])" v-bind:key="myTodo" >
            <span> </span> {{myTodo}}
            </li>
        </ul>
            <div>
      <button>all</button>
      <button>active</button>
      <button>complate</button>
      <button>reset</button>
      </div>
        <p class="listCount">my todo list count {{myList.length - myCheckList.length}}</p>
        <p class="complateCount"> my complate list count {{myCheckList.length}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      myTodo: '',
      myList: [],
      myCheckList: []
    }
  },
  methods: {
    todoPush () {
      if (this.myTodo.trim() === '') {
        alert('내용을 입력하세요')
      } else {
        this.myList.push(this.myTodo)
        this.myTodo = ''
      }
    },
      addClick (todoa) {
      event.target.classList.toggle('checked')
      const checkedArr
      if(){
        console.log("1")
      }else{
        this.myCheckList.push(todoa)
      }
    }
  }
}

</script>

<style scoped>
h1{
    color: pink;
    font-size: 70pt;
}
input{
    width: 400px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid palevioletred;
    padding-left: 15px;
}
li{
    list-style: none;
}
.checkList{
    margin: 0 auto;
    padding: 0;
    width: 400px;
    display: flex;
    height: 30px;
}
.checkList span{
    width: 15px;
    height: 15px;
    border-radius: 10px;
    border: 1px solid pink;
    display: block;
    margin-right: 20px;
}
.checked span{
    background-color: lightgray;
}
.listCount{
    color: lightgray;
}
</style>

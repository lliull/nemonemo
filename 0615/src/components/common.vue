<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'test'
    }
  }
}
</script>

<style scoped>
  h2{
    color: blue;
    font-weight: bold;
  }
</style>

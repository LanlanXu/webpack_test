<!--
  by：llxu7
  name：**
  notes：备注……
-->
<template>
  <div id="app">
    <h1>{{name}}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="name = item.name">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    let a = 'cllllll';
    return {
      name: '默认',
      a: a,
      list: [
        {
          name: 'xll'
        },
        {
          name: 'cl'
        }
      ]
    }
  },
  methods: {
    getName(){
      console.log(3)
    }
  }
}
</script>

<style scoped>
div{
    color: #fff;
}
</style>
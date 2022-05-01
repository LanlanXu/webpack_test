<!--
 * @Author: your name
 * @Date: 2022-04-30 09:25:37
 * @LastEditTime: 2022-05-01 22:46:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack_test\packages\vue-with-webpack-dev-server-webpack4\src\App.vue
-->
<!--
  by：llxu7
  name：**
  notes：备注……
-->
<template>
  <div>
    <h1 id="name">{{name}}</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="getName(item.name)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    let a = "cllllllwe133222";
    return {
      name: "默认",
      a: a,
      list: [
        {
          name: "xll"
        },
        {
          name: "cl"
        }
      ]
    };
  },
  methods: {
    getName(name){
      console.log(3);
      this.name = name;
      console.log('马上------',document.getElementById('name').innerHTML);
      this.$nextTick(()=>{
        console.log(document.getElementById('name').innerHTML);
      })
    }
  }
};
</script>

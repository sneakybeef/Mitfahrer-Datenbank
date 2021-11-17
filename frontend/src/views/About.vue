<template>
  <div class="content">
    <div class="container">
      <div>a: 1</div>
      <div>b: 2</div>
      <div>b: 2</div>
      <div>b: 2</div>
      <div>b: 2</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import { BootstrapVue } from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style  scoped>
.container{
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
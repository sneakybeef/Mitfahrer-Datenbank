<template>
  <div class="content">
    <div class="container">
      <div :v-if="data" v-for="drive in data" :key="drive.id">
        <Drive :drive="drive"/>
      </div>
    </div>
  </div>
</template>

<script>
import Drive from "../components/Drive"

  export default {
    data() {
      return {
         data:Array
      }
    },
    created(){
      console.log("createddd");
      console.log("created");
      
      fetch('http://jakobloewe.com/api/carpools')
      .then(response => response.json())
      .then(data => {console.log(data); this.data=data;
      });

    },
    components:{
      Drive
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
    flex-wrap:  wrap; 
}
</style>
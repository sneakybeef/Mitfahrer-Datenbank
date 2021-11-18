<template>
  <div>
  <div  v-for="drive in data" :key="drive.id">
    <Drive :drive="drive"/>
  </div>
  </div>
</template>

<script>
import Drive from "./Drive"
  export default {
    data() {
      return {
        page:null,
        data:Array
      }
    },
    watch: {
      page: function (val) {
        console.log(val); 
        console.log( val==0);
     
      }
    },
    created(){
      
      fetch('http://jakobloewe.com/api/carpools/reserved')
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

</style>
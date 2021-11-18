<template>
  <div>
 <CreateDrive class="formCreate"/>
  <div  v-for="drive in data" :key="drive.id">
    <Drive :drive="drive"/>
  </div>
  </div>
</template>

<script>
import Drive from "./Drive"
import CreateDrive from "./CreateDrive"

  export default {
    data() {
      return {
        page:null,
        data:Array
      }
    },

    created(){
      
      fetch('http://jakobloewe.com/api/carpools/created')
      .then(response => response.json())
      .then(data => {console.log(data); this.data=data;
      });

    },
    components:{
      Drive,
      CreateDrive
    },
    methods: {
      
    }
  }
</script>

<style  scoped>
.formCreate{
    margin-bottom: 30px;
}
</style>
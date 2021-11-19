<template>
  <div>
 <CreateDrive class="formCreate"/>
  <div  v-for="drive in data" :key="drive.carpooldate_id">
    <CreatedDrive  :drive="drive"/>
  </div>
  </div>
</template>

<script>
import CreatedDrive from "./CreatedDrive"
import CreateDrive from "./CreateDrive"
import eventBus from '../eventbus'

  export default {
    data() {
      return {
        page:null,
        data:Array
      }
    },
    mounted() {
    // adding eventBus listener
    eventBus.$on('deleteCreatedDrive', () => {
      console.log("refresh CreatedDrives");
      setTimeout((self) => {fetch('https://jakobloewe.com/api/carpools/created')
            .then(response => response.json())
            .then(data => {console.log(data); this.data = data;
            });}, 1000);
      
      })
    },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('deleteCreatedDrive')
  },
    created(){
       fetch('https://jakobloewe.com/api/carpools/created')
          .then(response => response.json())
          .then(data => {console.log(data); this.data=data;
          });
    },
    components:{
      CreateDrive,
      CreatedDrive
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
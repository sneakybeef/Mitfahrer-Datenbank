<template>
  <div>
  <div  v-for="drive in data" :key="drive.id">
    <ReservedDrive  :drive="drive"/>
  </div>
  </div>
</template>

<script>
import ReservedDrive from "./ReservedDrive"
import eventBus from '../eventbus'

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

    mounted() {
    // adding eventBus listener
    eventBus.$on('delete', () => {
      fetch('https://jakobloewe.com/api/carpools/reserved')
            .then(response => response.json())
            .then(data => {console.log(data); this.data = data;
            });
    })
  },
  mounted() {
    // adding eventBus listener
    eventBus.$on('deleteReservedDrive', () => {
      console.log("refresh CreatedDrives");
      setTimeout((self) => {fetch('https://jakobloewe.com/api/carpools/reserved')
            .then(response => response.json())
            .then(data => {console.log(data); this.data = data;
            });}, 1000);
      
      })
    },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('deleteReservedDrive')
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('delete')
  },
    created(){
      
      fetch('https://jakobloewe.com/api/carpools/reserved')
      .then(response => response.json())
      .then(data => {console.log(data); this.data=data;
      });

    },
    components:{
      ReservedDrive
    },
    methods: {
      
    }
  }
</script>

<style  scoped>

</style>
<template>
  <div class="content">
    <div class="radios">
      <div class="radio">  
        <input  type="radio" v-model="page" value="0">Angebote  
      </div>
    <div class="radio"> 
  <input type="radio" v-model="page" value="1">Angebot erstellen 
  </div>
  <div class="radio"> 
  <input type="radio" v-model="page" value="2">Meine Angebote   
  </div>
  </div>
  <div v-if="data && page == 0">
    <div  v-for="drive in data" :key="drive.id">
    <Drive  :drive="drive"/>
    </div>
  </div>

  <CreatedDrives v-if="page == 1"/>
  <MyDrives v-if="page == 2"/>

  </div>
</template>

<script>
import Drive from "../components/Drive"
import CreatedDrives from "../components/CreatedDrives"
import MyDrives from "../components/MyDrives"
import eventBus from '../eventbus'

  export default {
    data() {
      return {
        page:0,
        data:Array
      }
    },
       mounted() {
    // adding eventBus listener
    eventBus.$on('accept', () => {
      console.log("accept");
        setTimeout(() => {}, 1000);
      fetch('https://jakobloewe.com/api/carpools/available')
            .then(response => response.json())
            .then(data => {console.log(data); this.data = data;
            });
    })
  },
  beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('accept')
  },

    created(){
      fetch('https://jakobloewe.com/api/carpools/available')
      .then(response => response.json())
      .then(data => {console.log(data); this.data=data;
      });

    },
    components:{
      Drive,CreatedDrives,MyDrives
    },
    methods: {
      
    }
  }
</script>

<style  scoped>
.radios{justify-content: center;
display: flex;margin-bottom: 20px;}
</style>
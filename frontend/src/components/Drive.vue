<template>
<div class="driveContainer">
  <div class="drive">
    <div class="collumn1">
    <div>Fahrer:  {{drive.user_name}}</div>
    <div>Email:  {{drive.user_email}}</div>
    <div>Serie:  {{drive.id}}</div>
    </div>
    <div class="collumn2">
    <div >Stadt:  {{drive.city}} {{drive.postalcode}} {{drive.street}}</div>
    <div>Kosten:  {{drive.cost}}</div>
    <div>Datum:  {{drive.date}}</div>
    <div>Startzeit:  {{drive.from}}</div>
    <div>Schulstunde:  {{drive.schoolhour}}</div>
    </div>
    <div class="collumn3">
    <div >Umweg:  {{drive.allow_detour}}</div>
    <div >Autotyp:  {{drive.cartype}}</div>
    <div >Versicherung:  {{drive.is_insured}}</div>
    <div >Freie Sitze:  {{drive.passengers}}</div>
    </div>
    <div class="collumn4">
    <div >Beschreibung: {{drive.description}}</div>
    </div>
    <div class="collumn5">
       <button class="button-book" type="button" v-on:click="addDrive">reservieren</button> 
       
    </div>

    
  </div>
  <div v-if="drive.to" class="seriesBorder">
   <div class="seriesInfo">
    <div>
    <div>Serieninfos: </div>
  </div>
  <div>
    <div>Serienende: {{drive.to}}</div>
  </div>
    <div>
    <div>Interval: {{drive.interval}}</div>
  </div>
  <div>       
    <button class="button" v-if="drive.to" type="button" v-on:click="addDriveSeries">Serie reservieren</button> 
</div>
  </div>
  </div>
  </div>
</template>

<script>
const axios = require('axios');
import eventBus from '../eventbus'

export default {
   props:{
       drive:Object
   },
   created(){
    console.log("drive"+this.drive);
       
   },
   methods:{
     addDrive(){
        axios
        .post('https://jakobloewe.com/api/reservation/carpooldates/'+this.drive.carpooldate_id)
        .then(response => (console.log(response)));
        eventBus.$emit("accept");
     },
      addDriveSeries(){
        axios
        .post('https://jakobloewe.com/api/reservation/carpools/'+this.drive.id)
        .then(response => (console.log(response)));
        eventBus.$emit("accept");

     }
   }
}
</script>

<style>

.button-book {
height: 40px;
width: 130px;
border-radius: 5px;
margin-right: 30px;
background-color: #5B9BD5;
}

.button {
margin-left: 120px;
width: 180px;
height: 30px;

background-color: #5B9BD5;
}
.driveContainer{
  border-radius: 25px;
  border: 2px solid #5B9BD5;
  
  padding: 5px;
  margin-bottom: 30px;
  margin-right: 2.5%;
  margin-left: 2.5%;
}
.drive{
  display: grid;
  grid-template: "collumn1 collumn2 collumn3 collumn4 collumn5" / 15% 35% 20% 13% 12%;
  margin-top: 15px;
  margin-bottom: 15px;

  grid-gap: 0px 15px;
}
.seriesInfo{
  margin-top:5px;
  display: grid;
  grid-template: "1 2 3 4 5" 30px / 15% 35% 20% 20% 20%;
  grid-area: row2;
  grid-gap: 0px 15px;

}
.seriesBorder{
  border-top: 2px solid #5B9BD5;
  margin-top:10px;
  margin-bottom: 5px;
}
.info{
    margin-bottom: 10px;
}
</style>
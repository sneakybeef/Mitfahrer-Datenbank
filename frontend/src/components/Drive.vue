<template>
<div class="driveContainer">
  <div class="drive">
    <div class="collumn1">
    <div>Fahrer:  {{drive.user_id}}</div>
    <div>Id:  {{drive.carpooldate_id}}</div>
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
       <button type="button" v-on:click="addDrive">Angebot annehmen</button> 
       <button type="button" v-on:click="addDriveSeries">AngebotSerie annehmen</button> 

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
  </div>
  </div>
  </div>
</template>

<script>
const axios = require('axios');

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
        .post('http://jakobloewe.com/api/reservation/carpooldates/'+this.drive.carpooldate_id)
        .then(response => (console.log(response)))
     },
      addDriveSeries(){
        axios
        .post('http://jakobloewe.com/api/reservation/carpools/'+this.drive.id)
        .then(response => (console.log(response)))
     }
   }
}
</script>

<style>

.driveContainer{
  border-radius: 25px;
  border: 2px solid blue;
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
  border-top: 2px solid blue;
  margin-top:10px;
  margin-bottom: 5px;
}
.info{
    margin-bottom: 10px;
}
</style>
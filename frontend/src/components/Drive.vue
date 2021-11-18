<template>
  <div class="drive">
    <div class="info">Detour: {{drive.allow_detour}}</div>
    <div class="info" v-html="drive.carpooldate_id"></div>
    <div class="info" v-html="drive.cartype"></div>
    <div class="info" v-html="drive.city"></div>
    <div class="info" v-html="drive.contactinfo"></div>
    <div class="info" v-html="drive.cost"></div>
    <div class="info" v-html="drive.date"></div>
    <div class="info" v-html="drive.description"></div>
    <div class="info" v-html="drive.from"></div>
    <div class="info" v-html="drive.id"> </div>
    <div class="info" v-html="drive.interval"> </div>
    <div class="info" v-html="drive.is_insured"> </div>
    <div class="info" v-html="drive.is_return_drive"> </div>
    <div class="info" v-html="drive.passengers"> </div>
    <div class="info" v-html="drive.postalcode"> </div>
    <div class="info" v-html="drive.schoolhour"> </div>
    <div class="info" v-html="drive.street"> </div>
    <div class="info" v-html="drive.to"> </div>
    <div class="info" v-html="drive.user_id"></div>
  </div>
</template>

<script>
export default {
   props:{
       drive:Object
   },
   created(){
       console.log(this.drive);
       
   }
}
</script>

<style>
.drive{
    margin-right: 30px;
        margin-top: 30px;

}
.info{
        margin-bottom: 10px;

}
</style>
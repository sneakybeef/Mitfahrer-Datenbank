<template>
  <div class="content">
    
    <b-form-checkbox id="input-group-0" v-model="isSeries" >Serie</b-form-checkbox>

    <b-form class="form" @submit="onSubmit" >
      <b-form-group
        class="label"
        id="input-group-1"
        label="Stadt:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.city"
          placeholder="Stadt"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-2"
        label="Zip:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="drive.postalcode"
          placeholder="PLZ"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-3"
        label="Straße:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="drive.street"
          placeholder="Straße"
          required
        ></b-form-input>
      </b-form-group>
 <b-form-group  class="label" id="input-group-4" label="Schulstunden:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="drive.schoolhour"
          :options="schoolhourOptions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-5"
        label="Datum:"
        label-for="input-5"
      >
        <b-form-datepicker id="input-5" v-model="drive.from" class="mb-2" required></b-form-datepicker>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-6"
        label="Serienende:"
        label-for="input-1"
        v-if="isSeries"
      >

                <b-form-datepicker id="input-6" v-model="drive.to" class="mb-2" ></b-form-datepicker>

      </b-form-group>

      <b-form-group class="label"
      v-if="isSeries"
        id="input-group-7"
        label="Interval:"
        label-for="input-7"
      >
        <b-form-input
        
          id="input-7"
          v-model="drive.interval"
          placeholder="Interval"
          
        ></b-form-input>
      </b-form-group>

   <b-form-group class="label"
        id="input-group-8"
        label="Fahrttyp:"
        label-for="input-8"
      >      
      <b-form-radio-group class="label"
        v-model="drive.is_return_drive"
        :options=" [
          { text: 'Rückfahrt', value: true },
          { text: 'Hinfahrt', value: false },
        ]"
        name="plain-inline"
        plain
      ></b-form-radio-group>
    </b-form-group>
 

      <b-form-group class="label"
        id="input-group-9"
        label="Kosten:"
        label-for="input-9"
      >
        <b-form-input
          id="input-1"
          v-model="drive.cost"
          placeholder="Kosten"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-10"
        label="Fahrzeug:"
        label-for="input-10"
      >
        <b-form-input
          id="input-10"
          v-model="drive.cartype"
          placeholder="Fahrzeug"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="label"
        id="input-group-11"
        label="Versicherung:"
        label-for="input-11"
      >
        <b-form-checkbox id="input-group-11" v-model="drive.is_insured" required> </b-form-checkbox>
      </b-form-group>

   

            <b-form-group class="label"
        id="input-group-12"
        label="Umweg:"
        label-for="input-12"
      >
        <b-form-checkbox  id="input-12" v-model="drive.allow_detour" required>  </b-form-checkbox>
      </b-form-group>
 
       <b-form-group class="label" id="input-group-13" label="freie Sitze:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="drive.passengers"
          :options="schoolhourOptions"
          required
        ></b-form-select>
      </b-form-group>

            <b-form-group class="label"
        id="input-group-14"
        label="Telefonnummer:"
        label-for="input-14"
      > 
      <b-form-input
          id="input-14"
          v-model="drive.contactinfo"
          placeholder="Telefonnummer"
          required
        ></b-form-input>
      </b-form-group>

            <b-form-group class="label"
        id="input-group-15"
        label="Beschreibung:"
        label-for="input-15"
      >
       <b-form-textarea
      id="textarea"
      v-model="drive.description"
      placeholder="Beschreibung"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

      </b-form-group >
      <b-button  class="button" type="submit" variant="primary">Angebot erstellen</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue"
import { BootstrapVue } from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
import eventBus from '../eventbus'

const axios = require('axios');

  export default {
    data() {
      return {
        isSeries:false,
        drive: 
        {    
            "city":"", //string*
            "postalcode":"", //string*
            "street":"", //string*
            "schoolhour":0, //int*
            "from":null, //date*
            "to":null, //date, nur bei Serie
            "interval":null, //string, nur bei Serie
            "is_return_drive":true, //bool*
            "cost":0, //double, default 0
            "cartype":"", //string*
            "is_insured":false, //bool, default false
            "allow_detour":false, //bool, default false
            "passengers":0, //int*
            "contactinfo":"", //string
            "description":"" //string
            }, 
        
        schoolhourOptions: [
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17

        ]
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

        axios
        .post('https://jakobloewe.com/api/carpools',this.drive)
        .then(response => (console.log(response)))
        eventBus.$emit('deleteCreatedDrive')
    
    },
      
    }
  }
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>
<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style>
<style  scoped>
.label{ margin-top: 6px;}
.content{
  border-radius: 25px;
  border: 2px solid #5B9BD5;
  padding: 5px;
  padding-top: 43px;
  padding-right: 40px;
  padding-bottom: 43px;
  padding-left: 50px;
  width: 60%;
  margin: auto;
}
.button{
    margin-top: 50px;
    height: 50px;
}
.form{
    display: flex;
    flex-wrap: wrap;
}
.form > * {
    margin-right:  10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly   ;
}

</style>
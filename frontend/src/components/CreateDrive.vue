<template>
  <div class="content">
    <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.city"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.city"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.postalcode"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.street"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.schoolhour"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.from"
          type="date"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

            <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="drive.to"
          type="date"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        drive: 
        {    
            "city":"", //string*
            "postalcode":"", //string*
            "street":"", //string*
            "schoolhour":0, //int*
            "from":Date.now(), //date*
            "to":Date.now(), //date, nur bei Serie
            "interval":"", //string, nur bei Serie
            "is_return_drive":true, //bool*
            "cost":0, //double, default 0
            "cartype":"", //string*
            "is_insured":false, //bool, default false
            "allow_detour":false, //bool, default false
            "passengers":0, //int*
            "contactinfo":"", //string
            "description":"" //string
            }   
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
    }
  }
</script>

<style  scoped>
.content{
    width: 60%;
    margin: auto;
}
</style>
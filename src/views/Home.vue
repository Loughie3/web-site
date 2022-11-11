<template>
  
   
<b-container >
 
  <b-row align-v="center" class="image">
    <b-col ></b-col>
    <b-col md="8"> <b-carousel 
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    :interval="3000"
    no-animation
    indicators
    img-width="100px"
    img-height="50px"
    
  >
   
    <b-carousel-slide
      img-src="https://cdn.pixabay.com/photo/2015/12/17/23/34/wire-1098059_960_720.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://cdn.pixabay.com/photo/2015/09/20/12/18/electric-948208_960_720.jpg"
    ></b-carousel-slide>
    
  </b-carousel>
  
</b-col>
<b-col></b-col>
  </b-row>
  <b-row >

    <b-col md="6" >
      <b-card md="6" class="card">
          <h3><b-icon-dot/> Who are we?</h3>
          South Bank Electrical has been established for over __ years, 
          we are a team of highly expierienced electrictions. We pride ourselves on getting the job done in a time and cost effective manner.
          <h3><b-icon-dot/> Quality Assurance</h3> 
          You can rest asure that that the job will be completed with the utmost care and quality 
       </b-card>
       <b-card class="card" >
      <h1>We specialise in:</h1>
     <h3><p>DATA <b-icon-check-lg/> </p>
     <p> RESIDENTIAL  <b-icon-check-lg/></p> 
     <p> COMMERCIAL  <b-icon-check-lg/></p>  
     <p> MAINTENANCE  <b-icon-check-lg/></p>
     <p>AIR-CONDITIONING <b-icon-check-lg/> </p>
     <p>SMOKE DETECTION <b-icon-check-lg/></p>
    </h3> 
      </b-card>
      </b-col>
    <b-col > 
      
  <div>
    <b-col md="12">
      <b-card class="card2">
      <h3><b-icon-dot/>Attention to Detail</h3>
      This Keeping a close and thoughtful eye on all aspects of an electrical and data installation has ensured that these demands are met every time. We can offer complete electrical and data installations 
        <h3><b-icon-dot/>Fully Licenced and certified</h3>
      <p>We hold all valid Australian electrical licences </p> 
      </b-card>
      

    </b-col>
    <b-form @submit="onSubmit" class ="form" md="6">
      <h3 style="color: rgb(235, 100, 33); text-decoration: none;">Enquiry Form:</h3>
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-1" class="label">
      <b-form-input class="input"
          id="input-1"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>

        <b-form-group id="input-group-2" label="Email address:" label-for="input-2" class="label">
        </b-form-group>
        <b-form-input class="input"
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Phone Number:" label-for="input-3" class="label">
        </b-form-group>
        <b-form-input class="input"
          id="input-3"
          v-model="form.number"
          placeholder="Enter Phone Number"
          type="phone"
          required
        ></b-form-input>

        <b-form-group id="input-group-4" label="Subject:" label-for="input-4" class="label">
        </b-form-group>
        <b-form-input class="input"
          id="input-4"
          v-model="form.subject"
          placeholder="Enter The Subject"
        ></b-form-input>

        <b-form-group id="input-group-5" label="Message:" label-for="input-5" class="label">
        </b-form-group>
        <b-textarea class="text"
          id="input-5"
          v-model="form.message"
          placeholder="Message"
          type="text-box"
          required
        ></b-textarea>
      

      

      
      

      <b-button type="submit" variant="primary">Submit</b-button>
    
    </b-form>
   
  </div>

    </b-col>
  </b-row>


</b-container>
         
   
   
   </template>
   <script>
   export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          number: '',
          subject: '',
          message: '', 

        
        },
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
   <style scoped>
  
   .image{
  margin-bottom: 55px;
   }
   
  
.card{
  background-color:rgb(95, 95, 95);
  color: white;
  font-size: 25px;
  text-align: center;
  margin-bottom: 50px;
  border: 4px solid; 
  color: rgb(255, 255, 255);
  
  

  
}
.card2{
  font-size: 25px;
 


  
}

h3{
  font-size: 35px;
  text-decoration: underline;
}

   
   .label {
      color: rgb(235, 100, 33);
      text-align: center;

      margin: 15px 0 7px;
      font-size: 1em;
      
      letter-spacing: 1px;
      font-weight: bold;}
     

   .form{
   
 
    margin-left:10px;
   margin-top: 10px;
    width:70%;
    border: 5px solid; color:rgb(0, 0, 0);
    border-radius: 15px;
      border-style: round; 
      padding-left: 5px;
    background-color: rgb(49, 49, 49); 
    
   }
   .input{
  display: block;
      padding-left: 10px;
      margin-left:20px;
      width: 90%;
      height: 4vh;
      box-sizing: border-box;
      border:#0e0f11;
      border-bottom: 1px solid #ddd;
      font-size: 50px,}
  
   </style>
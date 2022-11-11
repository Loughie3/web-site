
<template>
  <b-container>
    <b-row>
     <b-col>
     
      </b-col>
        <b-col class="details" md="8">     
<h1 style="color:white">We specialise in: </h1> 
<h3>
 
<P><b-button size="lg" v-b-toggle.collapse-1 style=" background: black;" class="m-1" >DATA <b-icon-caret-down/></b-button>
<b-collapse id="collapse-1">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      Certified data installers </h1> We are skilled in getting you set up or helping when you need changes made, as your business changes or expands.

Office network cabling from Cat5E through to fibre optic
Data racks
Diagnosing data cabling and PSTN line faults
Labelling, cable management and record keeping
Alterations to your existing cabling infrastructure
  
  </b-card>
</b-collapse></P>
<p><b-button size="lg" v-b-toggle.collapse-2 style=" background: black;" class="m-1">RESIDENTIAL <b-icon-caret-down/></b-button>
<b-collapse id="collapse-2">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      For all your residential needs </h1> We are skilled in getting you set up or helping when you need changes made, as your business changes or expands.

Office network cabling from Cat5E through to fibre optic
Data racks
Diagnosing data cabling and PSTN line faults
Labelling, cable management and record keeping
Alterations to your existing cabling infrastructure
  
  </b-card>
</b-collapse></p>   
<p><b-button size="lg" v-b-toggle.collapse-3 style=" background: black;" class="m-1">COMMERCIAL <b-icon-caret-down/></b-button>
<b-collapse id="collapse-3">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      Commercial </h1> No business is too large for us or some shit
  
  </b-card>
</b-collapse></p>  
<p><b-button size="lg" v-b-toggle.collapse-4 style=" background: black;" class="m-1">MAINTENANCE <b-icon-caret-down/></b-button>
<b-collapse id="collapse-4">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      Maintenance </h1> 
  </b-card>
</b-collapse></p> 
<p><b-button size="lg" v-b-toggle.collapse-5 style=" background: black;" class="m-1"> AIR CONDITIONING <b-icon-caret-down/></b-button>
<b-collapse id="collapse-5">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      Air Conditioning  </h1>  <li>Installation</li> <li>Repair</li><li>Service</li>
  
  </b-card>
</b-collapse></p> 
<p><b-button size="lg" v-b-toggle.collapse-6 style=" background: black;" class="m-1">SMOKE DETECTION <b-icon-caret-down/></b-button>
<b-collapse id="collapse-6">
  <b-card  md="5" class="card" bg-variant="dark">
    <h1 class="card-text">
      Smoke detection </h1> Smoke alarms are vital for any house/business. South Bank Electrical offers tests and installation
  
  </b-card>
</b-collapse></p> 

</h3>  

        </b-col>
     <b-col>
    </b-col>
 </b-row>

 

  </b-container>
</template>

<script>
export default {
name: 'Services'
}
</script>

<style>

p, h3, h1{
    padding-top: 10px;
    text-align: center;
}
.card{
  width: 100%;
  color: white;
}



</style>
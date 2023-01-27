<template>
  <b-container fluid class="text-light,">
    <div>
      <b-jumbotron class="jumbotron, text-center" header="Air Conditioning">
      </b-jumbotron>
    </div>
    <b-row> </b-row>
    <b-row style="color: white">
      <b-col md="2"></b-col>

      <sideNav />

      <b-col md="1"> </b-col>
      <b-col md="5">
        <b-img
          style="margin-bottom: 20px"
          fluid
          :src="require('../Services/Images/Aircon.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2 class="text-center">Air Conditioning</h2>
        <p class="description">
          Air conditioning is a must-have for any home or business in hot, humid
          climates. Not only does it keep the air inside your home or business
          comfortable, but it can also help to reduce allergies, improve air
          quality, and even help you sleep better at night. When you invest in
          air conditioning, you're not just making your space more comfortable –
          you're also adding value to your property. Plus, with energy-efficient
          options available, you can save on your monthly energy bills while
          still staying cool. 
          
          <p>Don't suffer through another hot, muggy summer –
          contact us today to learn more about installing air conditioning in
          your home or business!
          </p>
        </p>
       
        
      </b-col>
      <b-row></b-row>
      <hr />
    </b-row>
  </b-container>
</template>
<script>
import sideNav from "@/components/sideNav.vue";
export default {
  components: { sideNav },
};
</script>
<style>
.jumbotron {
  color: white;
  font-size: calc(100% + 1.5vw);
  font-family: "Quattrocento Sans", sans-serif;
  padding-top: 200px;
  margin-bottom: 50px;
  height: 400px;
  background-image: url("../Services/Images/Test2.jpeg");
  backdrop-filter: blur(8px);
}
</style>

<template>
  <b-container fluid class="text-light,">
    <div>
      <b-jumbotron class="jumbotron, text-center" header="Electric Vehicle">
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
          :src="require('../Services/Images/Electric V.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2 class="text-center">Electric Vehicle Charging</h2>
        <p class="description">
          Installing electric vehicle charging outlets at your business or
          residence is a smart and responsible choice for the environment. Not
          only will it attract eco-conscious customers and tenants, but it will
          also reduce your carbon footprint and save you money on fuel costs in
          the long run. Our professional installation team will make sure the
          process is seamless and hassle-free. With our wide range of charging
          options and competitive pricing, there has never been a better time to
          make the switch to electric. 
          <p>Upgrade your property and join the
          movement towards a cleaner, more sustainable future. Contact us today
          to learn more and request a quote.
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

<style scoped>
.jumbotron::after {
  content: "";
  position: absolute;
  filter: blur(8px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-image: url("../Services/Images/Test2.jpeg");
}
@media (max-width: 900px) {
  .jumbotron {
    max-height: 350px;
  }
}
</style>

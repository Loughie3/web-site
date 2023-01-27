<template>
  <b-container fluid class="text-light,">
    <div>
      <b-jumbotron
        class="jumbotron, text-center"
        header="CCTV and Home Security"
      >
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
          :src="require('../Services/Images/CCTV1.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2 class="text-center">CCTV and Home Security Installations</h2>
        <p class="description">
          Home security and CCTV systems offer peace of mind by providing
          protection for your home and family. These systems can deter
          burglaries and break-ins, as well as provide a visual record of any
          incidents that occur on your property. CCTV systems can be monitored
          remotely, allowing you to keep an eye on your home even when you're
          away. 
          <p>With a wide range of options available, we can find you a system
          that fits your specific needs and budget.</p> 
          <p>The professionals at SBE
          have the expertise and experience to properly install and configure
          the system to meet your specific needs and the layout of your home. So
          enquire for a free quote today!
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

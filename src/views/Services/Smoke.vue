<template>
  <b-container fluid class="text-light,">
    <div class="text">
      <b-jumbotron class="jumbotron, text-center" header="Smoke Detection">
      </b-jumbotron>
    </div>
    <b-row> </b-row>
    <b-row style="color: white">
      <b-col md="2"></b-col>

      <sideNav />

      <b-col md="1"> </b-col>
      <b-col md="5">
        <b-img
          style="margin-bottom: 100px"
          fluid
          :src="require('../Services/Images/Camera.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2>We Provide Professional CCTV and Home Security Installations</h2>
        <p class="description">
          South Bank Electrical has been established for over 15 years, we are a
          team of highly expierienced electrictions.We pride ourselves on
          getting the job done in a time and cost effective manner.
        </p>
        <h2>
          <b-icon icon="tools" class="icon" font-scale="2.5"></b-icon> Expert
          Electricians
        </h2>

        <b-row>
          <h2>
            <b-icon icon="clock-fill" class="icon" font-scale="2.5"></b-icon>
            Fast Quotes
          </h2>
        </b-row>
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

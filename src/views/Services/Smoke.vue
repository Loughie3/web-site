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
          style="margin-bottom: 20px"
          fluid
          :src="require('../Services/Images/Smoke.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2 class="text-center">Smoke Detection</h2>
        <p class="description">
          Smoke detectors are an essential part of any home or business. They
          provide early warning of fire, allowing you and your family or
          colleagues to evacuate the premises safely. Our smoke detectors are
          reliable, easy to install, and offer peace of mind for you and your
          loved ones. They are also affordable and can save you money on
          insurance premiums.
        </p>
        <p>
          Don't wait until it's too late - Protect your home or business today
          and enquire for a free quote!
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

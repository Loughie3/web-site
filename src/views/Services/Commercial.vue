<template>
  <b-container fluid class="text-light,">
    <div>
      <b-jumbotron
        class="jumbotron, text-center"
        header="Commercial and Residential"
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
          :src="require('../Services/Images/Test2 copy.jpeg')"
        ></b-img>
      </b-col>
      <b-row></b-row>

      <b-col md="3"> </b-col>
      <b-col md="2"> </b-col>
      <b-col md="5">
        <h2 class="text-center">General Electrical/ Data</h2>
        <p class="description">
          If you're in need of top-notch electrical contracting services, look
          no further! Our team of highly skilled and trained electricians are
          equipped to handle all of your electrical needs, from simple repairs
          to complex installations. We pride ourselves on our attention to
          detail and commitment to safety, ensuring that every job is completed
          to the highest standards.
        </p>
        <p>
          With years of experience and a reputation for excellence, you can
          trust us to get the job done. Contact us today for a free quote!
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

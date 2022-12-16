<template>
  <b-col md="12"
    ><b-jumbotron class="jumbotron, text-center" md="5">
      <div class="heading">
        {{ title.Home }}
        <h1>Home Security and Electrical Experts</h1>
        <h1>License number: 90105</h1>
      </div>
    </b-jumbotron>
  </b-col>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {
      title: {
        Home: "Welcome To South Bank",
        CCTV: "CCTV",
        Data: "Data",
        Aircon: "Air conditioning",
        Commercial: "Commercial/Residential",
        Smoke: "Smoke Detection",
        Electric: "Electric Vehicle",
      },
    };
  },
};
</script>

<style>
.jumbotron::after {
  content: "";
  position: absolute;
  filter: blur(8px);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-image: url("../assets/Test2.jpeg");
}
</style>

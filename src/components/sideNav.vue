<template>
  <b-col md="2">
    <b-row
      ><h1 class="text-center" style="background-color: rgb(235, 100, 33)">
        Services
      </h1></b-row
    >
    <b-row
      ><router-link class="sideNav" to="/Cctv"
        >CCTV and Home Security</router-link
      ></b-row
    >
    <b-row>
      <router-link class="sideNav" to="/ElectricVehicle"
        >Electric Vehicle charging</router-link
      ></b-row
    >

    <b-row
      ><router-link class="sideNav" to="/Aircon"
        >Air conditioning</router-link
      ></b-row
    ><b-row>
      <router-link class="sideNav" to="/Smoke"
        >Smoke Detection</router-link
      ></b-row
    >
    <b-row>
      <router-link class="sideNav" to="/Commercial"
        >General Electrical/ Data</router-link
      ></b-row
    >
  </b-col>
</template>

<script>
export default {
  name: "sideNav",
};
</script>
<style>
.sideNav {
  color: rgb(255, 255, 255);

  font-size: 20px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 25px;

  font-family: "Quattrocento Sans", sans-serif;
  border-radius: 10px;
  text-decoration: none;
  display: block;
}
.sideNav:hover {
  color: rgb(235, 100, 33);
}
.sideNav.router-link-exact-active {
  color: rgb(235, 100, 33);
}
</style>

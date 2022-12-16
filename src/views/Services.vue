<template>
  <b-container fluid class="text-light, text-center">
    <b-row>
      <b-col cols="3"></b-col>
      <b-col cols="6"> </b-col>
      <b-col cols="3"></b-col>
    </b-row>
    <h1 style="color: white; padding-top: 150px">
      We specialise in:
      <hr style="border-top: 10px double orange" />
    </h1>

    <b-row>
      <b-col> </b-col>

      <b-col md="2">
        <div>
          <b-card
            img-src="https://cdn.pixabay.com/photo/2020/05/18/00/32/cable-5183996_960_720.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1"
              >Data <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-1">
              <b-card
                header="We are certified data installers"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col md="2">
        <div>
          <b-card
            :img-src="require('../assets/Camera.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1"
              >Home Security And CCTV Systems <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-2">
              <b-card
                header=" For all your residential needs"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col md="2">
        <div>
          <b-card
            :img-src="require('../assets/Pic.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1"
              >Commerical/Residential <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-3">
              <b-card
                header="Commercial"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col></b-col>
    </b-row>

    <b-row>
      <b-col>1 </b-col>
      <b-col md="3">2</b-col>
      <b-col md="3"
        ><b-nav-item class="nav"
          ><router-link class="nav-a" to="/Contact"
            >Request a Quote Today!</router-link
          ></b-nav-item
        >
      </b-col>
      <b-col md="2">4</b-col>
      <b-col>5</b-col>
    </b-row>

    <b-row>
      <b-col></b-col>

      <b-col md="2">
        <div>
          <b-card
            :img-src="require('../assets/Electric V.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1"
              >Electrical Vehicle Charging Outlets <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-4">
              <b-card
                header="Maintenance"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col md="2">
        <div>
          <b-card
            :img-src="require('../assets/Aircon.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1">
              Air Conditioning <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-5">
              <b-card
                header="Air Conditioning"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col md="2">
        <div>
          <b-card
            :img-src="require('../assets/Smoke.jpeg')"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-button size="lg" class="m-1"
              >Smoke Detection <b-icon-caret-down
            /></b-button>
            <b-collapse id="collapse-6">
              <b-card
                header="Smoke detection"
                md="5"
                class="card"
                bg-variant="dark"
                style="border-color: rgb(235, 100, 33); font-size: 35px"
              >
              </b-card>
            </b-collapse>
          </b-card></div
      ></b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
p,
h3,
h1 {
  padding-top: 10px;
  text-align: center;
}
.card {
  width: 100%;
  color: white;
}
.m-1 {
  background-color: rgb(0, 0, 0);
  border: black;
  width: 100%;
}
.m-1:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);

  border-radius: 15px;
  border: 2px solid;
  border-color: rgb(255, 255, 255);
}

.mb-2 {
  background-color: rgb(14, 13, 13);
  max-width: 40rem;
  margin-top: 70px;
}
.mb-2:hover {
  background: rgb(235, 100, 33);
  transition: 0.5s;
  border-radius: 15px;
  border: 3px solid;
  border-color: white;
  border-style: round;
}
.nav-a {
  font-weight: bold;
  color: #000000;
  text-align: center;
  padding-top: 20px;

  padding-right: 70px;
  padding-bottom: 20px;
  padding-left: 70px;

  border-radius: 10px;
  border: 5px solid rgb(0, 0, 0);
  text-decoration: none;
  background: rgb(235, 100, 33);
}
.nav {
  padding-bottom: 5px;
  padding-left: 30px;
  padding-top: 50px;
}
</style>

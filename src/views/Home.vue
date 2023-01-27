<template>
  <b-container fluid class="text-center">
    <div>
      <b-col md="12"
        ><b-jumbotron
          class="jumbotron"
          md="5"
          header="Welcome to South Bank Electrical"
          style="color: whitesmoke"
        >
          <div class="heading">
            <h1>Home Security and Electrical Experts</h1>
            <h1>License number: 90105</h1>
          </div>
        </b-jumbotron>
      </b-col>
    </div>

    <b-row class="image">
      <b-col md="3"> </b-col>
      <b-col md="6">
        <b-carousel id="carousel-no-animation" :interval="3000" fade indicators>
          <b-carousel-slide
            v-for="(slide, index) in slides"
            :img-src="slide.image"
            :key="index"
          >
          </b-carousel-slide>
        </b-carousel>
      </b-col>

      <b-row> </b-row>
    </b-row>

    <b-row class="text-center" style="color: white">
      <b-col md="2"></b-col>
      <b-col md="3"></b-col>
      <b-col md="7"><h4 style="margin-top: 50px">About Us</h4></b-col>
      <b-row
        ><b-col md="2"> </b-col>

        <b-col md="3">
          <b-img
            style="position: relative; border: none"
            thumbnail
            fluid
            width="600"
            :src="require('../assets/Elect.jpeg')"
            class="aboutImage"
          >
          </b-img>
        </b-col>
        <b-col md="1"> </b-col>
        <b-col md="5">
          <h3>Professional Home Security and Electrical Services</h3>

          <p class="description">
            South Bank Electrical has been established for over 15 years, we are
            a team of highly expierienced electrictions. We pride ourselves on
            getting the job done in a time and cost effective manner.
          </p>
          <h2>
            <b-icon icon="tools" class="icon" font-scale="1.75"></b-icon> Expert
            Electricians
          </h2>

          <b-row>
            <h2>
              <b-icon icon="clock-fill" class="icon" font-scale="1.75"></b-icon>
              Fast Quotes
            </h2>
          </b-row>
        </b-col>
      </b-row>

      <b-col md="4">
        <div class="cards">
          <b-card no-body class="overflow-hidden">
            <b-nav-item class="navCards"
              ><router-link class="nav-aCards" to="/electricVehicle">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      :src="require('../assets/Electric V.jpeg')"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <div class="labels">Electric Vehicle Charging</div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </router-link>
            </b-nav-item>
          </b-card>
        </div>
      </b-col>
      <b-col md="4">
        <div class="cards">
          <b-card no-body class="overflow-hidden">
            <b-nav-item class="navCards"
              ><router-link class="nav-aCards" to="/cctv">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      :src="require('../assets/CCTV2.jpeg')"
                      alt="Image"
                      class="rounded-0"
                    >
                    </b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <div class="labels">Home Security and CCTV</div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </router-link>
            </b-nav-item>
          </b-card>
        </div>
      </b-col>
      <b-col md="4">
        <div class="cards">
          <b-card no-body class="overflow-hidden">
            <b-nav-item class="navCards"
              ><router-link class="nav-aCards" to="/commercial">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      :src="require('../assets/Test2.jpeg')"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <div class="labels">Electrical Installations</div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </router-link>
            </b-nav-item>
          </b-card>
        </div>
      </b-col>
      <b-row
        ><b-col md="4"> </b-col>
        <b-col md="3"> </b-col>
        <b-col md="4"> </b-col
      ></b-row>

      <b-col md="1"></b-col>
      <b-col md="7"><h4>Why Choose Us?</h4></b-col>
      <b-col md="2"></b-col>
      <b-col md="3"></b-col>

      <b-row>
        <b-col md="2"> </b-col>
        <b-col md="5"
          ><h3>Quality Assurance</h3>
          <p class="description">
            You can rest assure that that the job will be completed with the
            utmost care and quality
          </p>
          <h3>Attention To Detail</h3>
          <p class="description">
            We keep a close and thoughtful eye on all aspects of an home
            security and electrical installation has ensured that these demands
            are met every time. We can offer complete electrical and data
            installations
          </p>
        </b-col>
        <b-col md="4">
          <h2>
            <b-icon icon="stars" class="icon" font-scale="1.75"></b-icon>
            Satisfaction Guaranteed
          </h2>
          <h2>
            <b-icon
              icon="hand-thumbs-up-fill"
              class="icon"
              font-scale="1.75"
            ></b-icon>
            15 years of Experience
          </h2>
        </b-col>
        <b-col md="3"> </b-col>
      </b-row>

      <b-row
        ><h4 style="margin-top: 50px" class="services">Our Services:</h4></b-row
      >
      <b-row>
        <b-col></b-col>

        <b-col md="3">
          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/cctv"
                  >Home Security/CCTV
                  <b-card-img
                    class="serviceImages"
                    :src="require('../assets/Camera.jpeg')"
                  />
                </router-link>
              </b-nav-item>
            </b-card></div
        ></b-col>

        <b-col md="3">
          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/commercial"
                  >Commercial /Residential
                  <b-card-img
                    class="serviceImages"
                    :src="require('../assets/Pic.jpeg')"
                /></router-link>
              </b-nav-item>
            </b-card></div
        ></b-col>

        <b-col></b-col>
      </b-row>

      <b-row>
        <b-col></b-col>

        <b-col md="3">
          <div></div>

          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/electricVehicle"
                  >Electrical Vehicle
                  <b-card-img
                    class="serviceImages"
                    :src="require('../assets/Electric V.jpeg')"
                /></router-link> </b-nav-item
            ></b-card></div
        ></b-col>

        <b-col md="3">
          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/aircon"
                  >Air Conditioning
                  <b-card-img
                    class="serviceImages"
                    :src="
                      require('../assets/Aircon.jpeg')
                    " /></router-link></b-nav-item
            ></b-card></div
        ></b-col>

        <b-col md="3">
          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/smoke"
                  >Smoke Detection
                  <b-card-img
                    class="serviceImages"
                    :src="
                      require('../assets/Smoke.jpeg')
                    " /></router-link></b-nav-item
            ></b-card></div
        ></b-col>

        <b-col></b-col>
      </b-row>

      <b-row>
        <b-col
          ><h4 style="margin-top: 50px">Contact Us</h4>
          <h1>Feel free to get in touch with any enquiries</h1></b-col
        >
      </b-row>

      <b-row>
        <b-col md="2"></b-col>
        <b-col md="4">
          <b-form @submit.prevent="onSubmit" class="form">
            <b-form-group
              id="input-group-1"
              label="Your Name:"
              label-for="input-1"
              class="label"
            >
              <b-form-input
                class="input"
                type="text"
                id="input-1"
                v-model="form.name"
                placeholder="Enter name"
                required
              ></b-form-input>

              <b-form-group
                id="input-group-2"
                label="Email address:"
                label-for="input-2"
                class="label"
              >
              </b-form-group>
              <b-form-input
                class="input"
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Phone Number:"
              label-for="input-3"
              class="label"
            >
            </b-form-group>
            <b-form-input
              class="input"
              id="input-3"
              v-model="form.number"
              placeholder="Enter Phone Number"
              type="number"
              required
            ></b-form-input>

            <b-form-group
              id="input-group-4"
              label="Subject:"
              label-for="input-4"
              class="label"
            >
            </b-form-group>
            <b-form-input
              class="input"
              type="text"
              id="input-4"
              v-model="form.subject"
              placeholder="Enter The Subject"
            ></b-form-input>

            <b-form-group
              id="input-group-5"
              label="Message:"
              label-for="input-5"
              class="label"
            >
            </b-form-group>
            <b-textarea
              class="text"
              id="input-5"
              v-model="form.message"
              placeholder="Message"
              type="text-box"
              required
            ></b-textarea>

            <input
              class="button"
              style="background: rgb(235, 100, 33); margin-top: 10px"
              type="submit"
              value="Submit"
            />
          </b-form>
        </b-col>
        <b-col md="4">
          <b-card
            :img-src="require('../assets/Multi.jpeg')"
            style="
              margin-top: 80px;
              background-color: rgb(14, 13, 13);
              border: none;
            "
          ></b-card>
        </b-col>
      </b-row>

      <b-col cols="1"> </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  methods: {
    onSubmit() {
      console.log("submitted");
    },
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        number: "",
        subject: "",
        message: "",
      },

      slides: [
        {
          image: require("../assets/Camera.jpeg"),
        },
        {
          image: require("../assets/Light.jpeg"),
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755682_960_720.jpg",
        },
        {
          image:
            "https://cdn.pixabay.com/photo/2020/05/18/00/32/cable-5183996_960_720.jpg",
        },
      ],
      slides2: [
        {
          image:
            "https://cdn.pixabay.com/photo/2020/05/18/00/32/cable-5183996_960_720.jpg",
        },
        { image: require("../assets/Camera.jpeg") },
      ],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital@0;1&display=swap");

.heading {
  font-family: "Quattrocento Sans", sans-serif;
  font-size: calc(100% + 0.5vw);
}
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

.cards {
  margin-top: 100px;
  margin-bottom: 100px;
}
.navCards {
  list-style: none;
}
.nav-aCards {
  font-weight: bold;
  font-size: 10px;
  color: #dad3d3;
  text-decoration: none;
}

.icon {
  color: white;
  border-radius: 50%;
  border: solid rgb(235, 100, 33) 10px;
  background-color: rgb(235, 100, 33);
  text-align: left;
  margin-bottom: 1px;
}

.overflow-hidden {
  fill: rgb(235, 100, 33);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(to right top, #000000, #000000, #000000, #010101, #000000);

  background-position: center;
  animation: moveBg 30s linear infinite;
}

@keyframes moveBg {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -100px -200px;
  }
}

.overflow-hidden:hover {
  border: white;
  transition: 1s;
}

.mb-2 {
  color: black;
  background: rgb(14, 13, 13);
  text-align: left;
}
.mb-2:hover {
  transition: 0.5s;
  border-radius: 15px;
  border: 1px solid;

  border-style: round;
}

.nav-a {
  font-weight: bold;
  font-size: 17px;
  color: #ffffff;
  text-decoration: none;
}
.nav-a:hover {
  color: rgb(235, 100, 33);
  transition: 0.75s;
}

.description {
  font-size: 25px;
  margin-bottom: 50px;
}

.image {
  margin-bottom: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.rounded-0 {
  transition: all 0.5s ease;

  overflow: hidden;
}
.rounded-0:hover {
  transform: scale(1.1);
}
.serviceImages {
  transition: all 0.5s ease;

  overflow: hidden;
}
.serviceImages:hover {
  transform: scale(0.9);
}

h4 {
  color: white;
  font-size: 45px;
  font-family: "Quattrocento Sans", sans-serif;
  margin-bottom: 50px;
  background-image: linear-gradient(
    to right,
    rgb(14, 13, 13) 0% 20%,
    rgb(235, 100, 33) 20% 80%,
    rgb(14, 13, 13) 80% 100%
  );
}
h3 {
  font-size: 45px;
  margin-bottom: 20px;
}

.labels:hover {
  color: rgb(235, 100, 33);
  transition: 0.75s;
}
.labels {
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 15px 0 7px;
  font-size: 2em;
  letter-spacing: 1px;
  font-weight: bold;
}
.label {
  color: rgb(235, 100, 33);
  text-align: center;

  margin: 15px 0 7px;
  font-size: 1em;
  text-align: left;
  letter-spacing: 1px;
  font-weight: bold;
}

.form {
  text-align: left;
  margin-top: 10px;
  margin-right: 30px;
  margin-top: 75px;
  border-radius: 15px;
  border-style: round;
  padding-left: 5px;
  background-color: rgb(14, 13, 13);
}
.input {
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border: #0e0f11;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}
.text {
  width: 100%;
}
.button {
  background: rgb(235, 100, 33);
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  color: white;
  border: none;
  font-size: 20px;
}
@media (max-width: 1500px) {
  h3 {
    font-size: 35px;
  }
  .icon {
    font-size: small;
  }
}
@media (max-width: 900px) {
  h4 {
    font-size: 2rem;
    background-image: linear-gradient(
      to right,
      rgb(235, 100, 33) 30% 70%,
      rgb(235, 100, 33) 70% 90%,
      rgb(235, 100, 33) 90% 100%
    );
  }

  h3 {
    font-size: 2.5rem;
  }

  .services {
    margin-top: 50px;
  }

  .description {
    font-size: 1.2rem;
  }
  .aboutImage {
    margin-bottom: 50px;
  }
}
</style>

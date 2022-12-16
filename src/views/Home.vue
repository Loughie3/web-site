<template>
  <b-container fluid class="text-center">
    <div>
      <b-col md=""></b-col>
      <b-col md="12"
        ><b-jumbotron
          class="jumbotron"
          md="5"
          header="Welcome to South Bank Electrical"
        >
          <div class="heading">
            <h1>Home Security and Electrical Experts</h1>
            <h1>License number: 90105</h1>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col md=""></b-col>
    </div>

    <b-row class="image">
      <b-col md="3"> </b-col>
      <b-col md="6">
        <b-carousel
          id="carousel-no-animation"
          :interval="3000"
          fade
          indicators
          fluid
        >
          <b-carousel-slide
            fluid
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
            caption="First Slide"
            class="aboutImage"
          >
          </b-img>
        </b-col>
        <b-col md="1"> </b-col>
        <b-col md="5">
          <h3>Professional Home Security and Electrical Services</h3>

          <p class="description">
            South Bank Electrical has been established for over 15 years, we are
            a team of highly expierienced electrictions.We pride ourselves on
            getting the job done in a time and cost effective manner.
          </p>
          <h2>
            <b-icon icon="tools" class="icon" font-scale="2"></b-icon> Expert
            Electricians
          </h2>

          <b-row>
            <h2>
              <b-icon icon="clock-fill" class="icon" font-scale="2"></b-icon>
              Fast Quotes
            </h2>
          </b-row>
        </b-col>
      </b-row>

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
                      <h2>Home Security</h2>
                      <b-card-text>
                        This is a wider card with supporting text as a natural
                        lead-in to additional content. This content is a little
                        bit
                      </b-card-text>
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
                      :src="require('../assets/CCTV1.jpeg')"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h2>CCTV</h2>
                      <b-card-text>
                        This is a wider card with supporting text as a natural
                        lead-in to additional content. This content is a little
                        bit.
                      </b-card-text>
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
                      :src="require('../assets/Test2.jpeg')"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h2>Electrical Installations</h2>
                      <b-card-text>
                        This is a wider card with supporting text as a natural
                        lead-in to additional content.
                      </b-card-text>
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
            This Keeping a close and thoughtful eye on all aspects of an
            electrical and data installation has ensured that these demands are
            met every time. We can offer complete electrical and data
            installations
          </p>
        </b-col>
        <b-col md="3">
          <h2>
            <b-icon icon="stars" class="icon" font-scale="2"></b-icon>
            Satisfaction Guaranteed
          </h2>
          <h2>
            <b-icon
              icon="hand-thumbs-up-fill"
              class="icon"
              font-scale="2"
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

        <b-col md="2">
          <div>
            <b-card img-alt="Image" img-top class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/data"
                  >Data
                  <b-card-img
                    class="serviceImages"
                    :src="require('../assets/Internet.jpeg')" /></router-link
              ></b-nav-item>
            </b-card></div
        ></b-col>

        <b-col md="2">
          <div>
            <b-card img-alt="Image" img-top tag="article" class="mb-2">
              <b-nav-item class="nav"
                ><router-link class="nav-a" to="/cctv"
                  >Home Security and CCTV
                  <b-card-img
                    class="serviceImages"
                    :src="require('../assets/Camera.jpeg')"
                  />
                </router-link>
              </b-nav-item>
            </b-card></div
        ></b-col>

        <b-col md="2">
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

        <b-col md="2">
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

        <b-col md="2">
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

        <b-col md="2">
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
  font-size: 20px;
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
  color: rgb(255, 255, 255);
  background: rgb(49, 49, 49);
  margin-bottom: 50px;
  margin-top: 50px;
}
.overflow-hidden:hover {
  background: rgb(235, 100, 33);
  transition: 1s;
}

.mb-2 {
  color: black;
  background: rgb(14, 13, 13);
  text-align: center;
}
.mb-2:hover {
  transition: 0.5s;
  border-radius: 15px;
  border: 1px solid;

  border-style: round;
}

.nav-a {
  font-weight: bold;
  font-size: 20px;
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
  font-size: 50px;
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
  font-size: 60px;
  margin-bottom: 20px;
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
  .cards {
    margin-bottom: 1px;
    margin-top: 1px;
  }
  .description {
    font-size: 1.2rem;
  }
  .aboutImage {
    margin-bottom: 50px;
  }
}
</style>

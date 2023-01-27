<template>
  <b-container fluid class="text-light,">
    <div>
      <b-jumbotron class="jumbotron, text-center" header=" Projects">
      </b-jumbotron>
    </div>

    <b-row style="color: white">
      <b-col md="4"></b-col>
      <b-col md="4">
        <div style="margin-bottom: 50px" fluid class="text-center">
          Here are a few projects that we have worked on:
        </div>
      </b-col>

      <b-row></b-row>

      <b-col md="4">
        <b-carousel
          id="carousel-no-animation"
          :interval="5000"
          no-hover-pause
          fade
          indicators
          style="margin-bottom: 50px"
        >
          <b-carousel-slide
            v-for="(slide, index) in slides3"
            :img-src="slide.image"
            :key="index"
          >
          </b-carousel-slide>
        </b-carousel>
      </b-col>
      <b-col md="4">
        <b-carousel
          id="carousel-no-animation"
          :interval="5000"
          no-hover-pause
          fade
          indicators
          style="margin-bottom: 50px"
        >
          <b-carousel-slide
            v-for="(slide, index) in slides2"
            :img-src="slide.image"
            :key="index"
          >
          </b-carousel-slide> </b-carousel
      ></b-col>
      <b-col md="4">
        <b-carousel
          id="carousel-no-animation"
          :interval="5000"
          no-hover-pause
          fade
          indicators
          style="margin-bottom: 50px"
        >
          <b-carousel-slide
            v-for="(slide, index) in slides"
            :img-src="slide.image"
            :key="index"
          >
          </b-carousel-slide>
        </b-carousel>
      </b-col>

      <b-row></b-row>
      <hr />
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: require("../assets/Projects1.jpg"),
        },
        {
          image: require("../assets/Projects2.jpg"),
        },
        {
          image: require("../assets/Projects3.jpg"),
        },
      ],
      slides2: [
        {
          image: require("../assets/Projects2.jpg"),
        },
        {
          image: require("../assets/Projects3.jpg"),
        },
        {
          image: require("../assets/Projects1.jpg"),
        },
      ],
      slides3: [
        {
          image: require("../assets/Projects3.jpg"),
        },
        {
          image: require("../assets/Projects1.jpg"),
        },
        {
          image: require("../assets/Projects2.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.images {
  margin-top: 20px;
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

@media (max-width: 900px) {
  .jumbotron {
    max-height: 350px;
  }
}
</style>

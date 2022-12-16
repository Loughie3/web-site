<template>
  <b-container fluid>
    <div>
      <b-jumbotron class="jumbotron, text-center" header="Contact Us">
      </b-jumbotron>
    </div>
    <b-row align-v="center" class="text-center">
      <b-col></b-col>

      <b-col md="6">
        <h1 style="color: white" class="contactUs"></h1>

        <b-form
          @submit.prevent="onSubmit"
          class="form"
          style="
            background-color: rgb(49, 49, 49);
            border: 5px solid;
            color: black;
          "
        >
          <b-row>
            <b-col>
              <h2>Make an Enquiry:</h2>

              <b-form-group
                id="input-group-1"
                label="Your Name:"
                label-for="input-1"
                class="label"
              >
                <b-form-input
                  class="input"
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

              <input class="button" type="submit" value="Submit" />
            </b-col>

            <b-col md="6" class="divider">
              <h1 md="5" style="color: rgb(235, 100, 33); padding-left: 10px">
                Company Details:
              </h1>
              <h2 style="padding-top: 15px; padding-left: 10px">
                <p>South Bank Electrical</p>
                <p><b-icon-telephone></b-icon-telephone> 0401585335</p>
                <p><b-icon-globe></b-icon-globe> emillio110@hotmail.com</p>
                <p><b-icon-house-fill></b-icon-house-fill> Address</p>
                <b-card
                  :img-src="require('../assets/sbe.png')"
                  style="
                    background-color: rgb(49, 49, 49);
                    border: none;
                    padding-top: 15px;
                  "
                ></b-card>
              </h2>
            </b-col>
          </b-row>
        </b-form>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log("Submitted");
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
    };
  },
};
</script>

<style scoped>
.divider {
  border-left: 3px solid;
  color: white;
}
.label {
  color: rgb(235, 100, 33);

  margin: 15px 0 7px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
}
.input {
  display: block;
  padding: 10px;
  padding-right: 10px;
  width: 100%;
  height: 4vh;
  box-sizing: border-box;
  border: #0e0f11;
  border-bottom: 1px solid rgb(0, 0, 0);
  font-size: 20px;
}
.form {
  margin-top: 50px;

  border-radius: 15px;
  border-style: round;
  width: 100%;
  margin-bottom: 100px;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  color: white;
}

p {
  padding-top: 20px;
}

.contactUs {
  padding-top: 1px;
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
  .button {
    margin-bottom: 50px;
  }
  .text-center {
    border-left: none;
  }
  .divider {
    border-left: none;
  }
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
</style>

<template>
  <b-container fluid>
    <div>
      <b-jumbotron class="jumbotron, text-center" header="Contact Us">
      </b-jumbotron>
    </div>
    <b-row align-v="center" class="text-center">
      <b-col></b-col>

      <b-col md="8">
        <h1 style="color: white" class="contactUs"></h1>

<<<<<<< HEAD
        <b-form
          @submit.prevent="onSubmit"
          class="form"
          style="border: 5px solid"
        >
=======
        <b-form @submit.prevent="sendContactMessage()" class="form">
>>>>>>> 967f4fe17a3e6210b3817eafb5c5706d8a125632
          <b-row>
            <b-col>
              <h2>Make an Enquiry:</h2>

<<<<<<< HEAD
              <b-form-group
                id="input-group-1"
                label="Your Name:"
                label-for="input-1"
                class="label"
              >
                <b-form-input
                  class="text-sm"
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
                  class="text-sm"
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
                class="text-sm"
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
                class="text-sm"
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
                class="text-sm"
                id="input-5"
                v-model="form.message"
                placeholder="Message"
                type="text-box"
                required
              ></b-textarea>

              <input class="button" type="submit" value="Submit" />
=======
              <div v-if="contact_notice != ''" class="alert alert-warning">
                There was a problem submitting your message.
                {{ contact_notice }}
              </div>

              <div v-else>
                <h3>Message submitted Successfully</h3>
              </div>

              <form @submit.prevent="sendContactMessage()">
                <div class="form-group text-left">
                  <input
                    v-model="contact_email"
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    v-model="contact_message"
                    class="form-control mt-3"
                    placeholder="Enter Your Message"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </form>
>>>>>>> 967f4fe17a3e6210b3817eafb5c5706d8a125632
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
                    background-color: black;
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
  data() {
    return {
      email: "",
      message: "",
      contact_email: "",
      contact_message: "",
      contact_notice: "",
    };
  },
  methods: {
    sendContactMessage() {
      if (!this.validEmail(this.contact_email)) {
        this.contact_notice = "The email address is badly formatted.";
      } else if (this.contact_message.length < 10) {
        this.contact_notice = "Your message is too short";
      } else {
        const url = `https://us-central1-southbankelectrical.cloudfunctions.net/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}`;
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
        fetch(url, requestOptions);
        this.show_contact = false;
      }
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(to right top, #000000, #000000, #000000, #010101, #000000);
  background-size: cover;
  background-position: center;
  animation: moveBg 20s linear infinite;
}

@keyframes moveBg {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -100px -200px;
  }
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

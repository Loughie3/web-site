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

        <b-form @submit.prevent="sendContactMessage()" class="form">
          <b-row>
            <b-col>
              <h2>Make an Enquiry:</h2>

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

<template>
  <header>
    <div>
      <div>
        <b-row>
          <b-navbar toggleable="lg" variant="light" fixed="top">
            <b-col class="col-md-2"
              ><b-navbar-brand tag="h2" class="mb-2">
                <img
                  :src="require('../assets/southBankElectrical.png')"
                  width="450"
                  height="300"
                  style="margin-top: -100px; margin-bottom: -100px"
                  class="d-inline-block align-top"
                />
              </b-navbar-brand>
            </b-col>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-col cols="3">
                <b-navbar-nav>
                  <b-col md="6"></b-col>
                  <b-col md="12"
                    ><b-nav-item class="nav"
                      ><router-link class="nav-a" to="/"
                        >Home</router-link
                      ></b-nav-item
                    >
                  </b-col>
                  <b-col md="6">
                    <b-nav-item-dropdown text="Services" right>
                      <b-dropdown-item>
                        <router-link class="dropDownNav" to="/Cctv"
                          >CCTV</router-link
                        >
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <router-link class="dropDownNav" to="/ElectricVehicle"
                          >Electric Vehicle</router-link
                        >
                      </b-dropdown-item>

                      <b-dropdown-item>
                        <router-link class="dropDownNav" to="/Aircon"
                          >Aircon</router-link
                        ></b-dropdown-item
                      ><b-dropdown-item>
                        <router-link class="dropDownNav" to="/Smoke"
                          >Smoke Detection</router-link
                        ></b-dropdown-item
                      ><b-dropdown-item>
                        <router-link class="dropDownNav" to="/Commercial"
                          >General Electrical/ Data</router-link
                        ></b-dropdown-item
                      >
                    </b-nav-item-dropdown>
                  </b-col>
                  <b-col md="10"
                    ><b-nav-item class="nav">
                      <router-link class="nav-a" to="/projects"
                        >Projects</router-link
                      ></b-nav-item
                    ></b-col
                  >
                  <b-col md=""
                    ><b-nav-item class="nav">
                      <router-link class="nav-a" to="/contact"
                        >Contact</router-link
                      ></b-nav-item
                    ></b-col
                  >
                </b-navbar-nav>
              </b-col>
            </b-collapse>

            <b-col md="2">
              <h1 class="number">
                <b-icon-telephone-fill
                  style="color: rgb(235, 100, 33)"
                ></b-icon-telephone-fill>
                0401585335
              </h1></b-col
            >
            <b-col md="2">
              <router-link class="nav-a1" to="/Contact"
                >Request a Quote Today!</router-link
              >
            </b-col>
          </b-navbar>
        </b-row>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital@0;1&display=swap");

.nav-a:hover {
  color: rgb(235, 100, 33);
}

.services {
  color: black;
}
.dropdown-toggle:hover {
  color: rgb(235, 100, 33) !important;
}
.dropdown-toggle {
  color: black !important;
}
.dropdown {
  font-size: 22px;
  color: #000000;
  text-align: center;
  font-family: "Quattrocento Sans", sans-serif;
}
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropDownNav:hover {
  color: rgb(235, 100, 33);
  display: block;
}
.dropDownNav.router-link-exact-active {
  color: rgb(235, 100, 33);
}
.dropDownNav {
  font-size: 20px;
  color: black;

  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 25px;

  font-family: "Quattrocento Sans", sans-serif;
  border-radius: 10px;
  text-decoration: none;
  display: block;
}

.nav-a {
  font-size: 22px;
  color: #000000;
  text-align: center;
  padding-top: 25px;
  font-weight: bold;
  padding-bottom: 25px;
  padding-left: 70px;
  font-family: "Quattrocento Sans", sans-serif;
  border-radius: 10px;
  text-decoration: none;
}

.nav-a.router-link-exact-active {
  color: rgb(235, 100, 33);
  text-decoration: underline;
}
.nav-a1 {
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  padding-top: 12px;
  padding-right: 10px;
  padding-bottom: 12px;
  padding-left: 10px;
  font-family: "Quattrocento Sans", sans-serif;
  border-radius: 10px;
  text-decoration: none;
  background-color: rgb(235, 100, 33);
}

.nav-a1.router-link-exact-active {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.nav-a1:hover {
  color: rgb(0, 0, 0);
  transition: 0.75s;
}
@media (max-width: 1709px) {
  .nav-a1 {
    font-size: 15px;
  }
  .number {
    font-size: 25px;
  }
}
</style>

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import CCTV from "../views/Services/CCTV.vue";
import Aircon from "../views/Services/Aircon.vue";
import Commerical from "../views/Services/Commercial.vue";
import Data from "../views/Services/Data.vue";
import Smoke from "../views/Services/Smoke.vue";
import ElectricVehicle from "../views/Services/ElectricVehicle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/cctv",
    name: "cctv",
    component: CCTV,
  },
  {
    path: "/aircon",
    name: "aircon",
    component: Aircon,
  },
  {
    path: "/commercial",
    name: "commerical",
    component: Commerical,
  },
  {
    path: "/data",
    name: "data",
    component: Data,
  },
  {
    path: "/smoke",
    name: "smoke",
    component: Smoke,
  },
  {
    path: "/electricVehicle",
    name: "electricVehicle",
    component: ElectricVehicle,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

<template>
  <div>
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Hero from "@/components/Hero.vue";

export default {
  components: { Header },
};
</script>
<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(0, 0, 0);
}

body {
  background-image: linear-gradient(
    to right,
    rgb(14, 13, 13) 0% 5%,
    rgb(14, 13, 13) 5% 95%,
    rgb(14, 13, 13) 95% 100%
  );
}
</style>

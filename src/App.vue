<template>
  <div>
 <Header/>
  <NavBar/>
 
  <router-view/>
 
</div>

 


 
  
</template>

<script>



import NavBar from "./components/NavBar.vue"
import Header from "./components/Header.vue"

export default {
components: {Header, NavBar}

}


</script>
<style>
#app{
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 background: black;
  
}

body{
  width: 100vw;
  
  height: 100vh;

background-image: linear-gradient(to right, rgb(255, 255, 255) 0% 5%, rgb(49, 49, 49) 5% 95%, rgb(255, 255, 255) 95% 100%);

}

</style>
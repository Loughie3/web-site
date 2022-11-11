<template>
    <div id="nav">
    <nav class="container navbar navbar-expand-lg ">

      <div  id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
              <router-link to="/" class="nav-item nav-link" >Home</router-link>
              <router-link to="/services" class="nav-item nav-link" >Services</router-link>
              <router-link to="/projects" class="nav-link" >Projects</router-link>
              <router-link to="/contact" class="nav-link" >Contact</router-link>
          </div>
         
      </div>
  </nav>
   </div>
  
  </template>
  
  
  
  <style scoped>
  #nav {
    padding: 30px;
    margin-right: 23px;
    background-image: linear-gradient(to right, rgb(255, 255, 255) 0% 5%, rgb(49, 49, 49) 5% 95%, rgb(255, 255, 255) 95% 100%);

  
  }
  
  #nav a {
    font-weight: bold;
    color: #000000;
    margin: 20px;
    text-align: center;
    padding-top: 25px;
      padding-right: 70px;
      padding-bottom: 25px;
      padding-left: 70px;
    width: 300px;
    border-radius: 10px;
    border: 5px solid black;
    background: rgb(252, 248, 248);
    
  }
  
  #nav a.router-link-exact-active {
    color: #ec530c;
   
  }
  
  
  </style>
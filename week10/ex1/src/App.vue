<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
html {
    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body, #app {
  margin: 0;
  padding: 0;
}

nav {
  width: 100%;
  height: 45px;
  background: rgb(15, 15, 79);
  text-align: center;
}

nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: #fff;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.75;
  text-decoration: none;
}

nav a.router-link-active {
  text-decoration: underline;
  color: rgb(238, 238, 95);
}

.container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
}

.container h1 {
  text-align: center;
  font-size: 48px;
}

.container p, .container h3 {
  width: 800px;
  font-size: inherit;
  margin-left: 100px;
  
}

.container img {
    display: block;
    max-width: 600px;
    width: 100%;
    margin: 20px auto 20px;
}
</style>

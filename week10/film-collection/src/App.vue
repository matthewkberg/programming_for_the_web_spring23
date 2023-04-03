<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <h1>
      <RouterLink to="/">My Film Collection</RouterLink>
    </h1>
    <RouterView />
  </div>

</template>

<style>
html {
  min-height: 1500px;
  background: linear-gradient(#feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  color: #21265b;
}

p {
  font-family: 'Noto Serif', serif;
  background-color: #d3b8a4;
  padding: 10px;
  border-radius: 10px;

}

h1 {
  font-family: 'Bungee', cursive;
  color: #21265b;
  text-align: center;
}

a {
  font-family: 'Bungee', sans-serif;
  text-decoration: none;
  color: #21265b;
}

</style>

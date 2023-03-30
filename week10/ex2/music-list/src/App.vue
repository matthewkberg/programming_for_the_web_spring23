<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
 <div class="container">
  <RouterView></RouterView>
 </div>

</template>

<style>
html {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="home-container">
        <div>
            <img src="/films/marwencol-poster.jpeg" alt="marwencol poster">
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <RouterLink to="/films">Check out my film collection</RouterLink>
    </section>

</template>

<style scoped>
.home-container {
    max-width: 600px;
    margin: 0 auto;
}

img {
    max-width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
}
</style>
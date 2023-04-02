<script setup>
import { useRoute, RouterLink } from 'vue-router';
import filmData from "../data/film-list.json";
const route = useRoute();
console.log("route param", route.params);
const filmId = route.params.id;
const filmDetails = filmData.find((film) => {
    return filmId === film.id;
})
</script>

<template>
    <div class="detail-container">
        <div>
            <h1 class="title">{{ filmDetails.title }}</h1>
            <div>
                <RouterLink to="/films">Back to Collection</RouterLink>
            </div>
            <img 
            class="film-img" 
            :src="`/films/${filmDetails.poster}`" 
            :alt="filmDetails.title"/>
            <div>
                <h3>Synopsis</h3>
                <p>{{ filmDetails.synopsis }}</p>
            </div>
            <div>
                <h3>Genres</h3>
                <p>{{ filmDetails.genres }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.detail-container {
    max-width: 600px;
    margin: 0 auto;
}

img {
    max-width: 300px;
    width: 100%;
}
</style>
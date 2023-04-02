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
    <div>
        <div>{{ filmDetails.title }}</div>
    </div>
</template>
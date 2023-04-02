<script setup>
import filmData from '../data/film-list.json'
import filmCard from '../components/FilmCard.vue'
</script>

<template>
    <div class="card-container">
        <filmCard 
        :key="film.id" 
        v-for="film in filmData"
        :id="film.id"
        :name="film.title"
        :poster="film.poster"/>
    </div>
</template>

<style scoped>
.card-container {
    width: 640px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';
import filmData from '../data/film-list.json'
import filmCard from '../components/FilmCard.vue'
</script>

<template>
    <div>
        <filmCard 
        :key="film.id" 
        v-for="film in filmData"
        :id="film.id"
        :name="film.title"
        :poster="film.poster"/>
    </div>
</template>
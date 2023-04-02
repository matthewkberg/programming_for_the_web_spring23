<script setup>
import { RouterLink } from 'vue-router';
import filmData from '../data/film-list.json'
</script>

<template>
    <div>
        <div :key="film.id" v-for="film in filmData">{{ film.title }}</div>
    </div>
</template>
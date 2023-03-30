<script setup>
import { useRoute } from 'vue-router';
import MusicList from "../data/music-list.json";

const route = useRoute();
console.log(route.params.slug)
</script>

<template>
    <div>Song</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import MusicList from "../data/music-list.json";

const route = useRoute();
console.log(route.params.slug)
const song = MusicList.find(song => {
    return song.slug === route.params.slug;
})
</script>

<template>
    <div class="song-detail" :class="{
        rising: song.rank > song.position.positionLastWeek,
        falling: song.rank < song.position.positionLastWeek,
        same: song.rank === song.position.positionLastWeek
        }">
        <h1>{{ song.rank }}</h1>
        <h2>{{ song.title }}</h2>
        <img :src="song.cover" :alt="song.title">
        <p>Artist: {{ song.artist }}</p>
        <p>Peak Position: {{ song.position.peakPosition }}</p>
        <p>Weeks on Chart: {{ song.position.weeksOnChart }}</p>
    </div>
</template>

<style>
.song-detail {
    max-width: 500px;
    margin: 0 auto;
}
.song-detail h1, h2 {
    text-align: center;
}

.song-detail img{
    display: block;
    margin: auto;
}

.song-detail p {
    font-size: 16px;
    font-weight: 600;
    margin-left: 125px;
}

.song-detail.rising {
    border: 1px solid green;
}

.song-detail.falling {
    border: 1px solid red;
}

.song-detail.same {
    border: 1px solid blue;
}
</style>
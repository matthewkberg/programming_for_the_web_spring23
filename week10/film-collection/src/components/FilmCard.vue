<script setup>
import { RouterLink } from 'vue-router';
defineProps(["id", "name", "poster"])
</script>

<template>
    <div class="film-card">
        <img class="film-img" :src="poster" :alt="title" />
        <div class="footer">
            <RouterLink class="footer-link" :to="`/films/${id}`">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.film-card {
    max-width: 200px;
    border: 1px solid rgb(22, 22, 56);
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 15px;
}

.film-img {
    max-height: 300px;
    display: block;
    width: 100%;
}

.footer {
    text-align: center;
    border-top: 1px solid rgb(22, 22, 56);
    padding-top: 10px;
    padding-bottom: 10px;
}

</style>
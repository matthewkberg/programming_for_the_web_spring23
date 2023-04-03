<script setup>
import { RouterLink } from 'vue-router';
defineProps(["id", "name", "poster"])
</script>

<template>
    <div class="film-card">
        <img class="film-img" :src="`/films/${poster}`" :alt="title" />
        <div class="footer">
            <RouterLink class="footer-link" :to="`/films/${id}`">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.film-card {
    max-width: 200px;
    border: 2px solid #962fbf;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    background-color: #d3b8a4;
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
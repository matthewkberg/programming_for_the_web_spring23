<script setup>
    const props = defineProps(["filmPoster", "filmName", "filmYear", "filmGenres", "filmSynopsis"])
</script>

<template>
    <tr>
        <td><img class="poster-img" v-bind:src="filmPoster"></td>
        <td>{{ props.filmName }}</td>
        <td>{{ props.filmYear }}</td>
        <td>{{ props.filmGenres }}</td>
        <td>{{ props.filmSynopsis }}</td>
        <td>
            <button type="button">Delete</button>
        </td>
    </tr>
</template>

<style scoped>
.poster-img {
    max-width: 100px;
    padding: 5px;
}

td {
    min-width: 100px;
    max-width: 800px;
}

button {
    border-style: none;
    border-radius:50px;
    min-width: 150px;
    min-height: 50px;
    font-family: 'Bungee', serif;
    color: #ede2da;
    background-color: #962fbf;
}

.odd {
    background-color: #d3b8a4;
}

.even {
    background-color: #ede2da;
}
</style>
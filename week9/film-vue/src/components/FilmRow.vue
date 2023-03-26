<script setup>
    const props = defineProps(["filmPoster", "filmName", "filmYear", "filmGenres", "filmSynopsis"])
</script>

<template>
    <tr>
        <td><img class="poster-img" 
            v-bind:src="filmPoster"
            v-bind:alt="filmPoster + ' poster'"
            ></td>
        <td v-bind:style="{textAlign: 'center'}">{{ props.filmName }}</td>
        <td v-bind:style="{textAlign: 'center'}">{{ props.filmYear }}</td>
        <td v-bind:style="{textAlign: 'center'}">{{ props.filmGenres }}</td>
        <td v-bind:style="{padding: '15px'}">{{ props.filmSynopsis }}</td>
        <td v-bind:style="{padding: '15px'}">
            <button type="button" v-on:click="$emit('deleteFilm', props.filmName)">Delete</button>
        </td>
    </tr>
</template>

<style scoped>
.poster-img {
    max-width: 100px;
    padding: 5px;
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

</style>
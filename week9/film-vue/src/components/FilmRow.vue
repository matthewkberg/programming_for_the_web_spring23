<script setup>
    
</script>

<template>
    <tr>
        <td><img class="poster-img"></td>
        <td>title</td>
        <td>year</td>
        <td>genre</td>
        <td>synopsis</td>
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
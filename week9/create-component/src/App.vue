<script setup>
const camelids = [
      {
        commonName: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"
      },
    ]
</script>

<template>
 <h1>Camelids Bay-beeee!</h1>
 <table>
    <thead>
      <th>Common Name</th>
      <th>Binomial Name</th>
      <th>Order</th>
      <th>Family</th>
      <th>Genus</th>
      <th>Species</th>
      <th>Image</th>
    </thead>
    <tbody>
      <tr v-for="camelid in camelids" v-bind:key="camelid.commonName">
        <td>{{ camelid.commonName }}</td>
        <td>{{ camelid.binomialName }}</td>
        <td>{{ camelid.order }}</td>
        <td>{{ camelid.family }}</td>
        <td>{{ camelid.genus }}</td>
        <td>{{ camelid.species }}</td>
        <td><img class="camelid-img" v-bind:src="camelid.image" v-bind:alt="camelid.commonName"></td>
      </tr>
    </tbody>
 </table>
</template>

<style scoped>
  .camelid-img {
    max-width: 125px;
  }
</style>

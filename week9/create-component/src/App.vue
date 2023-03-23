<script setup>
import CamelidRow from "./components/CamelidRow.vue";
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
      <CamelidRow v-for="camelid in camelids" v-bind:camelid-name="camelid.commonName" v-bind:camelid-binomial="camelid.binomialName" v-bind:camelid-order="camelid.order" v-bind:camelid-family="camelid.family" v-bind:camelid-genus="camelid.genus" v-bind:camelid-species="camelid.species" v-bind:camelid-image="camelid.image" v-bind:key="camelid.commonName">
      </CamelidRow>
    </tbody>
 </table>
</template>

<style scoped>

</style>

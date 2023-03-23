<script setup>
    const props = defineProps(["camelidName", "camelidBionmial", "camelidOrder", "camelidFamily", "camelidGenus", "camelidSpecies"])
</script>
<template>
    <tr>
        <td>{{ props.camelidName }}</td>
        <td>{{ props.camelidBionmial }}</td>
        <td>{{ props.camelidOrder }}</td>
        <td>{{ props.camelidFamily }}</td>
        <td>{{ props.camelidGenus }}</td>
        <td>{{ props.camelidSpecies }}</td>
        <td><img class="camelid-img" ></td>
      </tr>
</template>
<script setup lang="ts">
const {type} = useRoute().query as { type: string };

</script>

<template>
  <h1>Bravo ! Vous venez de passer {{ type.slice(0,1) === '1' ? 'Premium' : 'Premium +' }}</h1>
</template>

<style scoped>

</style>
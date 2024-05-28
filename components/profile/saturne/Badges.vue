<script setup lang="ts">

const data = defineProps<{
  badges: Array<{
    name: string,
    image: string
  }>
}>()

</script>

<template>
  <div class="badges">
    <div class="badge" v-for="badge in data.badges">
      <h5>{{ badge.name }}</h5>
      <img :src="'/img/badges/'+badge.image" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
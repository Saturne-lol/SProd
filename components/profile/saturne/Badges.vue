<script setup lang="ts">
import type {Ref} from "vue";

const username = defineProps<{
  username: string | string[]
}>()

const {pending, data: badges} = await useFetch(`/api/profile/get-badges`, {query: {username: username.username}, lazy: true}) as {
  pending: Ref<boolean>,
  data: Ref<[{
    name: string,
    image: string
  }]>
}

</script>

<template>
  <div class="badges">
    <div class="badge" v-for="badge in badges" v-if="!pending">
      <h5>{{ badge.name }}</h5>
      <img :src="'/img/badges/'+badge.image" alt="">
    </div>
    <div class="badge" v-if="pending">
      <img src="/img/404.png" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
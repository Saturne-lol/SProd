<script setup lang="ts">
import type {Ref} from "vue";

const {pending, data: username} = useFetch(`/api/account/getUser`, {lazy: true}) as {pending: Ref<boolean>, data: Ref<{username: string, id: number, avatar: string}>};

function createAccountIfNotExists() {
  const {data: exist} = useFetch(`/api/account/is-exist`, {lazy: true}) as {data: Ref<boolean>}
  if (!exist.value) useFetch(`/api/account/create`)
}

createAccountIfNotExists();
</script>

<template>
  <div v-if="pending">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <h1>Welcome, {{username.username}} ({{username.id}})</h1>
    <img :src="'https://cdn.discordapp.com/avatars/' + username.id + '/' + username.avatar + '.png'" alt="avatar">
  </div>
</template>

<style scoped>

</style>
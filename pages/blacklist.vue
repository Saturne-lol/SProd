<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
const query = router.currentRoute.value.query

</script>

<template>
  <main>
    <h1 v-if="query.type === 'profile'">{{ query.username }} is blacklisted from Saturne.lol</h1>
    <h1 v-if="query.type === 'account'">You blacklisted from Saturne.lol, you can do an apeal in discord.gg/saturnelol</h1>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}
</style>
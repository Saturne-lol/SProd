<script setup lang="ts">

const data = defineProps<{
  discord: {
    username: string;
    avatar: string;
    status: string;
  },
}>()

</script>

<template>
  <div class="boxUser">
    <img :src="data.discord.avatar" alt="" id="ppDiscord">
    <!--    <img src="/img/presence/dnd.png" alt="" id="discordPresence">-->
    <div class="info">
      <h3>{{ data.discord.username.slice(0, 20) }}</h3>
      <h4>{{ (data.discord.status ? data.discord.status.slice(0, 24) : '') }}</h4>
    </div>
  </div>
</template>

<style scoped>

</style>
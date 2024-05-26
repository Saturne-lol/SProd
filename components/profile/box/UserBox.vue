<script setup lang="ts">
import type {Ref} from "vue";
import Badges from "~/components/profile/saturne/Badges.vue";

const username = defineProps<{
  username: string | string[]
}>()

const {pending, data: discord} = await useFetch(`/api/profile/get-box-user`, {query: {username: username.username}, lazy: true}) as {
  pending: Ref<boolean>,
  data: Ref<{
    username: string,
    avatar: string,
    status: string,
  }>
}
</script>

<template>
  <div class="boxUser">
    <img :src="pending ? '/img/404.png' : discord.avatar" alt="" id="ppDiscord">
<!--    <img src="/img/presence/dnd.png" alt="" id="discordPresence">-->
    <div class="info">
      <h3>{{ pending ? 'Loading...' : discord.username.slice(0, 20) }}</h3>
      <h4>{{ pending ? 'Loading...' : (discord.status ? discord.status.slice(0, 24) : '') }}</h4>
    </div>
  </div>
</template>

<style scoped>

</style>
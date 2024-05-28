<script setup lang="ts">
const data = defineProps<{
  pending: boolean,
  discord: {
    name: string,
    image: string | null,
    online: number,
    total: number,
    invite: string
  }[] | null
}>()

function formatNumber(value: number) {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(2) + 'MD';
  } else if (value >= 1000000) {
    return (value / 1000000).toFixed(2) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(2) + 'K';
  } else {
    return value.toString();
  }
}
</script>

<template>
  <div class="boxServer" v-for="server in data.discord" v-if="!data.pending">
    <div class="ppServ">
      <img v-if="server.image" :src="server.image" alt="">
    </div>
    <div class="infoServ">
      <h4>{{ server.name.slice(0, 20) }}</h4> <!-- 20 characters max -->
      <div class="memberServ" v-if="server.image">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 24 24">
          <path fill="#108363" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/>
        </svg>

        <p>{{ formatNumber(server?.online) }} Online</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="14" viewBox="0 0 24 24">
          <path fill="#80848E" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/>
        </svg>
        <p>{{ formatNumber(server.total) }} Total</p>
      </div>
      <a v-if="server.image" :href="'https://discord.gg/'+server.invite" target="_blank">JOIN</a>
    </div>
  </div>
</template>

<style scoped>

</style>
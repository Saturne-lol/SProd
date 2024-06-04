<script setup lang="ts">
import formatNumber from "~/utils/formatNumber";

const data = defineProps<{
  discord: {
    name: string,
    image: string | null,
    online: number,
    total: number,
    invite: string
  }[] | null
}>()
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
.boxServer {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.08);
  border: 1px solid rgb(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 10px;
  transition: 0.5s, transform 0.5s;
}

.boxServer:hover {
  box-shadow: 0px 0px 3px 1px #00000044;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.boxServer .ppServ img {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 20%;
  object-fit: cover;
  margin-right: 10px;
}

.boxServer .infoServ .memberServ {
  display: flex;
  align-items: center;
}

.boxServer .infoServ .memberServ i {
  font-size: 7px;
  margin-right: 5px;
}

.boxServer .infoServ .memberServ p {
  font-size: 80%;
  margin-right: 10px;
}

.boxServer .infoServ a {
  background-color: #1a6334;
  font-size: 70%;
  padding: 2px 8px 2px 8px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
}
</style>
<script setup lang="ts">

const data = defineProps<{
  discord: {
    username: string;
    avatar: string;
    status: string;
    emoji: string;
  },
}>()

</script>

<template>
  <div class="boxUser">
    <div class="DiscPresence">
      <img :src="data.discord.avatar" alt="" id="ppDiscord">
      <img src="/public/img/presence/idle.png" alt="" id="discordPresence">
    </div>
    <div class="info">
      <h3>{{ data.discord.username.slice(0, 20) }}</h3>
      <div class="status">
        <img v-if="data.discord.emoji" :src="data.discord.emoji" alt="">
        <h4>{{ (data.discord.status ? data.discord.status.slice(0, 24) : '') }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boxUser {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.08);
  border: 1px solid rgb(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 10px;
  transition: 0.5s, transform 0.5s;
}

.boxUser:hover {
  box-shadow: 0px 0px 3px 1px #00000044;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.DiscPresence {
  position: relative;
}

#ppDiscord {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

#discordPresence {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 3px;
}

.info h3 {
  font-weight: 500;
}

.info h4 {
  font-weight: 300;
}

.status {
  display: flex;
  align-items: center;
}

.status img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
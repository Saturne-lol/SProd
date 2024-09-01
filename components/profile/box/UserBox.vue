<script setup lang="ts">
const {isEnter, data} = defineProps({
  isEnter: Boolean,
  data: Object
}) as { isEnter: boolean, data: ProfileData };
</script>

<template>
  <div class="boxUser box box_outline" :class="isEnter ? 'slide-enter-left' : ''">
    <div class="DiscPresence">
      <img :src="data.discord.profile.avatar" alt="" id="ppDiscord">
      <img :src="'/img/presence/'+data.discord.profile.presence+'.png'" alt="" id="discordPresence">
    </div>
    <div class="info">
      <h3>{{ data.discord.profile.username.slice(0, 20) }}</h3>
      <div class="status">
        <img v-if="data.discord.profile.emoji" :src="data.discord.profile.emoji" alt="">
        <h4>{{ (data.discord.profile.status ? data.discord.profile.status.slice(0, 24) : '') }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boxUser {
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 10px;
  transition: 0.5s, transform 0.5s;
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
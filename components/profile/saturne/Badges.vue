<script setup lang="ts">
import {getBadges} from "~/composables/profile";

const url = useRoute().params.username as string
const badges = await getBadges(url)
</script>

<template>
  <div class="badges">
    <div class="badge" v-for="badge in badges">
      <h5>{{ badge.name }}</h5>
      <img :src="'/img/badges/'+badge.image" alt="">
    </div>
  </div>
</template>

<style scoped>
.badges {
  display: flex;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.08);
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
}

.badges .badge {
  position: relative;
  display: flex;
  align-items: center;
}

.badges img {
  width: 28px;
  height: 28px;
  padding: 4px;
}

.badges h5 {
  font-weight: 300;
  text-shadow: 0 0 10px #c9c9c9;
  white-space: nowrap;
  opacity: 0;
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease;
}

.badges h5:hover {
  opacity: 0;
}

.badges .badge:hover h5 {
  opacity: 1;
}
</style>
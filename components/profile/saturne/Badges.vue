<script setup lang="ts">
const props = defineProps({
  isEnter: Boolean,
  data: Object
}) as { data: ProfileData, isEnter: boolean };

const badges = props.data.profile.badges.map((badge: Badge, index: number) => {
  return {
    ...badge,
    index: index
  };
});

const animationState = ref(-1);
if (import.meta.client) {
  if (props.isEnter) startAnimation();
  watch(() => props.isEnter, async (value) => {
    if (value) {
      await startAnimation();
    }
  });
}

async function startAnimation() {
  animationState.value = -1;
  for (let i = 0; i < badges.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    animationState.value = i;
  }
}
</script>

<template>
  <div class="badges">
    <div class="badge" v-for="(badge, index) in badges" v-show="animationState >= index"
         :class="animationState >= index ? 'slice-enter-opac': ''">
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
  border: 1px solid rgba(255, 255, 255, 0.4);
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
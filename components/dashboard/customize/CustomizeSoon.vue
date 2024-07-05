<script setup lang="ts">
defineProps({
  title: String || undefined,
  icon: Boolean || undefined
});
</script>

<template>
  <div class="soon">
    <img src="/img/loading.gif" alt="" v-if="(icon || true)"/>
    <h1>{{ title || "Soon . . ." }}</h1>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  background-color: var(--dashboard-box-background);
  border: 1px solid var(--dashboard-border);
  border-radius: 20px;
}

.soon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soon h1 {
  font-size: 150%;
  font-weight: 700;
  text-shadow: 0 0 25px #000000;
}

.soon img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.padding {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title .Icon {
  margin-right: 10px;
}
</style>

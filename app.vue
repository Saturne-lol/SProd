<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <UNotifications/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  user-select: none;
  scroll-behavior: smooth;
  outline: none;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--index-background);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 3px solid var(--index-background);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) var(--index-background);
}

:root {
    --font-color: #fff;
    --check: #8ee65b;
    --uncheck: #e65b5b;
    --nav-background: rgba(255, 255, 255, 0.4);
    --index-background: rgba(255, 255, 255, 0.05);
    --index-button-border: rgba(255, 255, 255, 0.4);
    --index-button-border-hover: rgba(255, 255, 255, 0.6);
    --index-button-background-hover: rgba(255, 255, 255, 0.15);
    --dashboard-box-background: rgba(255, 255, 255, 0.1);
    --dashboard-border: rgba(255, 255, 255, 0.4);
    --dashboard-input-background: rgba(255, 255, 255, 0.05);
    --dashboard-button-close: rgba(255, 255, 255, 0.5);
    --snapchat: rgba(255, 252, 0, 0.3);
    --facebook: rgba(59, 89, 152, 0.3);
    --twitter: rgba(29, 161, 242, 0.3);
    --instagram: rgba(193, 53, 132, 0.3);
    --linkedin: rgba(0, 119, 181, 0.3);
    --youtube: rgba(255, 0, 0, 0.3);
    --tiktok: rgba(0, 0, 0, 0.3);
    --pinterest: rgba(189, 8, 28, 0.3);
    --twitch: rgba(100, 65, 165, 0.3);
    --spotify: rgba(29, 185, 84, 0.3);
    --discord: rgba(114, 137, 218, 0.3);
    --whatsapp: rgba(37, 211, 102, 0.3);
    --telegram: rgba(0, 136, 204, 0.3);
    --github: rgba(51, 51, 51, 0.3);
    --paypal: rgba(0, 69, 124, 0.3);
    --steam: rgba(23, 26, 33, 0.3);
    --buyMeCoffee: rgba(255, 129, 63, 0.3);
    --bitecoin: rgba(247, 147, 26, 0.3);
    --ethereum: rgba(98, 126, 234, 0.3);
    --litecoin: rgba(182, 182, 182, 0.3);
    --thread: rgba(26, 26, 26, 0.3);
    --deezer: rgba(183, 0, 255, 0.3);
}


.slide-enter-left {
  animation: slide-enter-left 1s ease;
}

.slide-enter-right {
  animation: slide-enter-right 1s ease;
}

.slide-enter-top {
  animation: slide-enter-top 1s ease;
}

.slide-enter-bottom {
  animation: slide-enter-bottom 1s ease;
}

.slice-enter-opac {
  animation: slide-enter-opac 1s ease;
}

@keyframes slide-enter-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-enter-top {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-enter-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-enter-bottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-enter-opac {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
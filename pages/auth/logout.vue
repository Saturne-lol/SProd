<script setup lang="ts">

if (process.client) {
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  window.location.href = "/";
}

</script>

<template>
  <img src="/img/landing/background.jpg" id="background"></img>
  <div class="waveTop"></div>
    <div class="home">
      <h1>Logout ...</h1>
    </div>
  <div class="waveBottom"></div>
</template>

<style scoped>
#background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  filter: brightness(0.30);
}

.waveBottom {
  width: 100%;
  height: 120px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255, 255, 255, 0.05)" d="M0,64 C120,80 240,32 360,64 C480,96 600,128 720,64 C840,0 960,32 1080,64 C1200,96 1320,32 1440,64 L1440,320 L0,320 Z"></path></svg>') repeat-x;
  background-size: contain;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.waveTop {
  width: 100%;
  height: 120px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255, 255, 255, 0.05)" d="M0,64 C120,80 240,32 360,64 C480,96 600,128 720,64 C840,0 960,32 1080,64 C1200,96 1320,32 1440,64 L1440,320 L0,320 Z"></path></svg>') repeat-x;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  rotate: 180deg;
}

.home {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home h1 {
  font-size: 300%;
  font-weight: 500;
  text-shadow: 0 0 10px #ffffff;
}
</style>
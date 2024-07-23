<script setup lang="ts">
if (process.client) {
  const code = new URLSearchParams(window.location.search).get('code');
  if (!code) window.location.href = '/login';

  const redirect_uri = window.location.origin + '/auth/callback'

  fetch(`/api/auth/code?code=${code}&redirect_uri=${redirect_uri}`)
      .then((res) => res.json())
      .then((res) => {
        if (!res?.code) return console.log("Erreur discord")

        const token = res?.token;
        if (!token) return console.log("Erreur pas de token")

        document.cookie = `token=${token}; path=/`
        window.location.href = '/dashboard/customize'
      });
}
</script>


<template>
  <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>
  <div class="waveTop"></div>
    <div class="home">
      <h1>Login ...</h1>
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
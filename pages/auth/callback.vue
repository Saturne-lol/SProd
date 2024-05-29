<script setup lang="ts">
if (process.client) {
  const code = new URLSearchParams(window.location.search).get('code');
  if (!code) window.location.href = '/auth/login';

  const redirect_uri = window.location.origin + '/auth/callback'

  fetch(`/api/auth/code?code=${code}&redirect_uri=${redirect_uri}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("code :", res?.code)
        if (!res?.code) return console.log("Erreur discord")

        const token = res?.token;
        if (!token) return console.log("Erreur pas de token")

        console.log("token :", res?.token)
        document.cookie = `token=${token}; path=/`
        window.location.href = '/dashboard/customize'
      });
}
</script>

<template>
  <div>
    <h1>Login...</h1>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 2rem;
}
</style>
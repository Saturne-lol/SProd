<script setup lang="ts">
if (process.client) {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='));
  if (token) {
    window.location.href = '/dashboard/home';
  }
  const host = window.location.origin;
  console.log(host);
  window.location.href = `https://discord.com/oauth2/authorize?client_id=1199385328784506931&response_type=code&redirect_uri=${host}/auth/callback&scope=identify+email`;
}
</script>

<template>
  <h1>Login</h1>
</template>
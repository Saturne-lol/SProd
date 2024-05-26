<script setup lang="ts">

if (process.client) {
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  window.location.href = "/";
}

</script>

<template>
  <h1>Logged out</h1>
</template>
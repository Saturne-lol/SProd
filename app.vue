<script setup lang="ts">
//log for all page components

</script>

<template>
  <NuxtLoadingIndicator color="#000"/>
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 3px solid rgba(255, 255, 255, 0.05);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
}


</style>
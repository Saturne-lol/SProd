<script setup lang="ts">
import FooterDashboard from "~/components/dashboard/FooterDashboard.vue";
import MenuPhoneDashboard from "~/components/dashboard/MenuPhoneDashboard.vue";
import MenuDashboard from "~/components/dashboard/MenuDashboard.vue";

useSeoMeta({
  title: "Dashboard - Saturne.lol",
  description: 'Saturne.lol dashboard, manage your profile and settings !',
  ogTitle: "Dashboard - Saturne.lol",
  ogDescription: 'Saturne.lol dashboard, manage your profile and settings !',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
</script>

<template>
<!--  <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>-->

  <div id="body">
    <div class="mainContainer">
      <MenuDashboard/>
      <div class="contentAndFooter">
        <div class="background">
          <NuxtPage/>
          <FooterDashboard/>
        </div>
      </div>
      <MenuPhoneDashboard/>
    </div>
  </div>
</template>

<style scoped>


/*#background {
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
}*/

#body {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainContainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 20px;
}

.mainContainer .contentAndFooter {
  overflow-y: auto;
  overflow-x: hidden;
}

.mainContainer .contentAndFooter .background {
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1300px) {
  .mainContainer {
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 30fr 1fr;
    padding: 0;
  }
}

</style>
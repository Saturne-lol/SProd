<script setup lang="ts">
import MenuPhoneDashboard from "~/components/dashboard/MenuPhoneDashboard.vue";
import FooterDashboard from "~/components/dashboard/FooterDashboard.vue";
import MenuDashboard from "~/components/dashboard/MenuDashboard.vue";
</script>

<template>
  <main>
    <video src="/public/video/dashboard.mp4" id="background" autoplay loop muted></video>
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
  </main>
</template>

<style scoped>

/* --------------------------------------- HOME --------------------------------------- */

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

main {
  overflow: hidden;
  height: 100%;
}

.mainContainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 20px;
  overflow-y: hidden;
  overflow-x: hidden;
}

.mainContainer .contentAndFooter {
  overflow-y: auto;
  overflow-x: auto;
}

.mainContainer .contentAndFooter .background {
  /* padding: 40px; */
  padding: 10px;
  /* PERMET flex-grow: 1 */
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
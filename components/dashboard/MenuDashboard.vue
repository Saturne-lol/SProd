<script setup lang="ts">
import type { Ref } from "vue";
import CustomizeSoon from "~/components/dashboard/customize/CustomizeSoon.vue";

const { data } = await useFetch("/api/account/get-nav") as {
  data: Ref<{
    username: string,
    avatar: string,
    plan: string
  }>
}
</script>

<template>
  <div class="nav">
    <div class="background">
      <!-- 1 -->
      <div class="title">
        <a href="/">
          <h1>ＳΛＴＵＲＮＥ</h1>
        </a>
      </div>
      <!-- 2 -->
      <div class="links">
        <ul>
          <li>
            <a href="/dashboard/customize">
              <Icon name="fa6-solid:paintbrush" class="Icon" />
              CUSTOMIZE
            </a>
          </li>
          <li>
            <CustomizeSoon class="soon"/>
            <a href="/dashboard/links">
              <Icon name="ph:link-simple-bold" class="Icon" />
              YOUR LINKS
            </a>
          </li>
          <li>
            <CustomizeSoon class="soon"/>
            <a href="/dashboard/stats">
              <Icon name="ion:stats-chart" class="Icon" />
              YOUR STATS
            </a>
          </li>
          <li>
            <CustomizeSoon class="soon"/>
            <a href="/dashboard/contact">
              <Icon name="material-symbols:alternate-email-rounded" class="Icon" />
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
      <!-- 3 -->
      <div class="profil">
        <div class="profilSaturne">
          <img :src="data.avatar" alt="pp" width="80px">
          <div class="infoProfilSaturne">
            <h4>{{ data.username }}</h4>
            <div class="infoProfilSaturneAbonement">
              <Icon name="basil:diamond-solid" class="Icon" v-if="data.plan.includes('PREMIUM')" />
              <h4>{{ data.plan.replaceAll("_PLUS", " +") }}</h4>
            </div>
          </div>
          <div class="menuProfilSaturne">
            <a href="/auth/logout">
              <Icon name="lucide:log-out" class="Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  border-radius: 40px;
  background-color: var(--index-background);
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.soon {
  font-size: 80%;
  
}

.nav .background {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav .background .title h1 {
  font-size: 200%;
  padding: 30px;
}

.nav .background .links {
  flex-grow: 1;
}

.nav .background .links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.nav .background .links li {
  position: relative;
  background-color: var(--dashboard-box-background);
  border: 1px solid var(--nav-background);
  padding: 10px 45px;
  border-radius: 15px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav .background .links .Icon {
  margin-right: 20px;
}

.nav .background .profil {
  width: 100%;
  position: relative;
  background-color: var(--dashboard-box-background);
  border: 1px solid var(--nav-background);
  padding: 20px;
  border-radius: 40px;
}

.nav .background .profil .profilSaturne {
  display: flex;
  align-items: center;
}

.nav .background .profil .profilSaturne img {
  width: 64px;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--nav-background);
  margin-right: 10px;
}

.nav .background .profil .infoProfilSaturne .infoProfilSaturneAbonement {
  display: flex;
  align-items: center;
}

.nav .background .profil .infoProfilSaturne .infoProfilSaturneAbonement .Icon {
  font-size: 18px;
  margin-right: 5px;
  margin-bottom: 2px;
}

.nav .background .profil .infoProfilSaturne .infoProfilSaturneAbonement h4 {
  font-weight: 300;
}

.nav .background .profil .menuProfilSaturne .Icon {
  position: absolute;
  right: 20px;
  margin-top: -10px;
  font-size: 20px;
  cursor: pointer;
}

@media screen and (max-width: 1300px) {
  .nav {
    display: none;
  }
}
</style>

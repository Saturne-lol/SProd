<script setup lang="ts">
import type {Ref} from "vue";

const {data} = await useFetch("/api/account/get-nav") as {
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
        <h1>SATURNE</h1>
      </div>
      <!-- 2 -->
      <div class="links">
        <ul>
          <a href="/dashboard/customize">
            <li>
              <Icon name="fa6-solid:paintbrush" class="Icon"/>
              CUSTOMIZE
            </li>
          </a>
          <a href="/dashboard/links">
            <li>
              <Icon name="ph:link-simple-bold" class="Icon"/>
              YOUR LINKS
            </li>
          </a>
          <a href="/dashboard/stats">
            <li>
              <Icon name="ion:stats-chart" class="Icon"/>
              YOUR STATS
            </li>
          </a>
          <a href="/dashboard/contact">
            <li>
              <Icon name="material-symbols:alternate-email-rounded" class="Icon"/>
              CONTACT US
            </li>
          </a>
        </ul>
      </div>
      <!-- 3 -->
      <div class="profil">
        <div class="profilSaturne">
          <img :src="data.avatar" alt="pp" width="80px">
          <div class="infoProfilSaturne">
            <h4>{{ data.username }}</h4>
            <div class="infoProfilSaturneAbonement">
              <Icon name="basil:diamond-solid" class="Icon" v-if="data.plan.includes('PREMIUM')"/>
              <h4>{{ data.plan.replaceAll("_PLUS"," +")}}</h4>
            </div>
          </div>
          <div class="menuProfilSaturne">
            <a href="/auth/logout"><Icon name="lucide:log-out" class="Icon"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.nav {
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.041);
  width: max-content; /* Set a fixed width for the navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.nav .background {
  padding: 20px;
  width: 100%; /* Ensure background takes the full width of the navbar */
  height: 100%; /* Ensure background takes the full height of the navbar */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav .background .title h1 {
  font-size: 250%;
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
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
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
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 40px;
}

.nav .background .profil .profilSaturne {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.nav .background .profil .profilSaturne img {
  width: 64px;
  height: auto;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
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
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
}

@media screen and (max-width: 1300px) {
  .nav {
    display: none;
  }
}
</style>

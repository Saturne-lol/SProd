<script setup lang="ts">
const {data} = await useFetch("/api/account/get-user")
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
          <img src="/img/404.png" alt="pp" width="80px">
          <div class="infoProfilSaturne">
            <h4>{{ data.username }}</h4>
            <Icon name="basil:diamond-solid" class="Icon"/>
            PREMIUM
          </div>
          <div class="menuProfilSaturne">
            <Icon name="ci:log-out" class="Icon"/>
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
}

.nav .background {
  padding: 20px;
}

.nav .background {
  height: 100%;
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

.nav .background .links li {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 45px 10px 45px;
  border-radius: 15px;
  margin-bottom: 25px;
  cursor: pointer;
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

.nav .background .profil .infoProfilSaturne .Icon {
  font-size: 18px;
  margin-right: 5px;
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
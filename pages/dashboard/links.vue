<script setup lang="ts">

// const {pending, data: username} = useFetch(`/api/account/getUser`, {lazy: true}) as {
//   pending: Ref<boolean>,
//   data: Ref<{ username: string, id: number, avatar: string, other: object }>
// };
//
// function createAccountIfNotExists() {
//   const {data: exist} = useFetch(`/api/account/is-exist`, {lazy: true}) as { data: Ref<boolean> }
//   if (!exist.value) useFetch(`/api/account/create`)
// }

// createAccountIfNotExists();

definePageMeta({
  layout: 'dashboard',
})

</script>

<template>
  <div class="content">
    <div class="title">
      <div class="title1">
        <Icon name="ph:link-simple-bold" class="Icon"/>
        <h2>Link your social media profiles.</h2>
      </div>
      <h4>Pick a social media to add to your profile.</h4>
    </div>
    <div class="links">
      <div class="box">
        <Icon name="ph:snapchat-logo-fill" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="fa6-brands:youtube" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:discord" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:spotify" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:instagram" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:twitter" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="ic:twotone-tiktok" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="mingcute:telegram-fill" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:paypal" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:github" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="ci:linkedin" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:steam" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:pinterest" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="simple-icons:buymeacoffee" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="cib:btc" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="simple-icons:ethereum" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="fa6-solid:litecoin-sign" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="ph:threads-logo-bold" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="simple-icons:deezer" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:twitch" class="Icon"/>
      </div>
      <div class="box">
        <Icon name="bi:facebook" class="Icon"/>
      </div>
    </div>
    <div class="inputs">
      <!--
          CERTAINS RESEAUX SOCIAUX REDIRIGE VERS DES LIENS, D'AUTRE PERMETTENT SEULEMENT DE COPY PASTE LE NOM D'UTILISATEUR
          PAR EXEMPLE SNAPCHAT MENE VERS UN LIEN ALORS QUE DISCORD UTILISE UN COPY PASTE DU NOM D'UTILISATEUR
          PAREILLE POUR LES ADRESSES CRYPTO, ELLES UTILISE UN COPY PASTE ET NON UN LIEN.
      -->
      <div class="box">
        <Icon name="material-symbols:emoticon" class="Icon"/>
        <input type="text" value="snapchat.com/add/" readonly>
        <div class="switch">
          <input class="input" id="snapchat" type="checkbox">
          <label class="label" for="snapchat"></label>
        </div>
        <a href=""><Icon name="mingcute:delete-3-fill" id="suppr"/></a>
        <a href=""><Icon name="ic:baseline-edit" id="modif"/></a>
      </div>
      <div class="box">
        <Icon name="material-symbols:emoticon" class="Icon"/>
        <input type="text" value="youtube.com/channel/" readonly>
        <div class="switch">
          <input class="input" id="youtube" type="checkbox">
          <label class="label" for="youtube"></label>
        </div>
        <a href=""><Icon name="mingcute:delete-3-fill" id="suppr"/></a>
        <a href=""><Icon name="ic:baseline-edit" id="modif"/></a>
      </div>
      <div class="box">
        <Icon name="material-symbols:emoticon" class="Icon"/>
        <input type="text" value=".inaudible" readonly>
        <div class="switch">
          <input class="input" id="discord" type="checkbox">
          <label class="label" for="discord"></label>
        </div>
        <a href=""><Icon name="mingcute:delete-3-fill" id="suppr"/></a>
        <a href=""><Icon name="ic:baseline-edit" id="modif"/></a>
      </div>
      <div class="box">
        <Icon name="material-symbols:emoticon" class="Icon"/>
        <input type="text" value="ADRESSE BTC DE L'UTILISATEUR" readonly>
        <div class="switch">
          <input class="input" id="btc" type="checkbox">
          <label class="label" for="btc"></label>
        </div>
        <a href=""><Icon name="mingcute:delete-3-fill" id="suppr"/></a>
        <a href=""><Icon name="ic:baseline-edit" id="modif"/></a>
      </div>
      <div class="box">
        <Icon name="material-symbols:emoticon" class="Icon"/>
        <input type="text" value="ADRESSE BTC DE L'UTILISATEUR" readonly>
        <div class="switch">
          <input class="input" id="ethereum" type="checkbox">
          <label class="label" for="ethereum"></label>
        </div>
        <a href=""><Icon name="mingcute:delete-3-fill" id="suppr"/></a>
        <a href=""><Icon name="ic:baseline-edit" id="modif"/></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.content {
  flex-grow: 1;
}

.content .title {
  margin-bottom: 40px;
}

.content .title .title1 {
  display: flex;
  align-items: center;
}

.content .title .title1 .Icon {
  font-size: 130%;
  margin-right: 15px;
}

.content .links {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  margin-bottom: 80px;
}

.content .links .box {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  cursor: pointer;
}

.content .links .box .Icon {
  font-size: 30px;
}

.content .inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.content .inputs .box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80%;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 6px;
  border-radius: 15px;
}

.content .inputs .box .Icon {
  font-size: 150%;
  margin-left: 10px;
}

.content .inputs .box #modif,
.content .inputs .box #suppr {
  font-size: 18px;
  padding: px;
}

.content .inputs .box input[type='text'] {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 4px;
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
  margin-right: 10px;
}

.content .inputs .box a {
  border-radius: 6px;
  padding: 5px 10px 5px 10px;
  transition: 0.3s ease;
}

.content .inputs .box a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}


.content .inputs .box .switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin-right: 10px;
}

.content .inputs .box .switch .input {
  display: none;
}

.content .inputs .box .switch .label {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 24px;
  background-color: #aaaaaa;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.content .inputs .box .switch .label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.content .inputs .box .switch .input:checked+.label {
  background-color: #7f4caf;
}

.content .inputs .box .switch .input:checked+.label::before {
  transform: translateX(16px);
}

.content .inputs .box .switch.light .label {
  background-color: #BEBEBE;
}

.content .inputs .box .switch.light .input:checked+.label {
  background-color: #9B9B9B;
}

.content .inputs .box .switch.light .input:checked+.label::before {
  transform: translateX(6px);
}

.content .inputs .box .switch.dark .label {
  background-color: #4B4B4B;
}

.content .inputs .box .switch.dark .input:checked+.label {
  background-color: #717171;
}

.content .inputs .box .switch.dark .input:checked+.label::before {
  transform: translateX(16px);
}

@media screen and (max-width: 1150px) {
  .content .links {
    grid-template-columns: repeat(12, 1fr);
  }

  .content .links {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 900px) {
  .content .links {
    grid-template-columns: repeat(10, 1fr);
  }
}

@media screen and (max-width: 730px) {
  .content .inputs {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 700px) {
  .content .links {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .content .links {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .content .links {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 450px) {
  .content .title .title1 .Icon {
    font-size: 100%;
  }
  .content .title .title1 h2 {
    font-size: 120%;
  }

  .content .title h4 {
    font-size: 110%;
    font-weight: 300;
  }
}

@media screen and (max-width: 350px) {
  .content .links {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
<script setup lang="ts">
import type {Ref} from 'vue';
import DiscordBox from '~/components/profile/box/DiscordBox.vue';
import UserBox from '~/components/profile/box/UserBox.vue';
import {useRoute} from 'vue-router';
import {getGlobal, getViews} from '~/composables/profile';

definePageMeta({
  middleware: async (to) => {
    const {data: isExist} = await useFetch('/api/profile/is-exist', {query: {username: to.params.username}}) as {
      data: Ref<{ code: string }>
    };
    if (isExist?.value?.code === 'bl') return '/blacklist?type=profile&username=' + to.params.username;
    if (isExist?.value?.code === 'ne') return '/errors/404?type=profile';
    useFetch('/api/profile/view', {body: {username: to.params.username}, method: 'POST'});
  }
});

const url = useRoute()?.params.username as string;
useSeoMeta({
  title: url.charAt(0).toUpperCase() + url.slice(1) + ' - Saturne.lol',
  description: 'Saturne.lol makes it easy to create a modern online profile !',
  ogTitle: url + ' - Saturne.lol',
  ogDescription: 'Saturne.lol makes it easy to create a modern online profile !',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
});

const isEnter = ref(false);

const {data} = await useFetch<ProfileData>('/api/profile/get',{query: {username: url},server:true}) as {data: Ref<ProfileData>};

const css = Object.keys(data.value.colors).map((key) => {
  return `
  .${key} {
   ${data.value.colors[key]}
  }`;
}).join('\n');

if (import.meta.client) {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}

const isBackgroundImage = () => {
  const image = new Image();
  image.src = 'https://cdn.saturne.lol/file/background/' + data.value.global.userID;
  return new Promise((resolve) => {
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
  });
};


const isImage = ref(true)
const video = ref<HTMLVideoElement | null>(null);
if (import.meta.client) {
  isBackgroundImage().then((res) => {
    isImage.value = res as boolean;
  });
}

watch(isEnter, (value) => {
  if (value) {
    if (video.value) {
      video.value.play();
    }
  }
});
</script>

<template>
  <main>
    <div id="tempBackground" v-if="!isEnter">
      <button id="click-to-enter" @click="isEnter = true">{{ data.global.enterMessage }}</button>
    </div>
    <img :src="'https://cdn.saturne.lol/file/background/'+data.global.userID" alt="background" id="background" v-if="isImage">
    <video :src="'https://cdn.saturne.lol/file/background/'+data.global.userID" id="background" loop muted playsinline v-else ref="video"/>
    <div class="center" v-show="isEnter">
      <div :class="['content', { 'single-box': data.discord.servers.length === 0 }]" id="content">
        <Profile :is-enter="isEnter" :data="data"/>
        <UserBox :is-enter="isEnter" :data="data"/>
        <DiscordBox :is-enter="isEnter" :data="data"/>
        <div class="view" :class="isEnter ? 'slide-enter-bottom' : ''" v-if="data.global.views !== -1">
          <h3>
            <Icon name="ic:sharp-remove-red-eye"/>
            - {{ data.global.views }}
          </h3>
          <h5>views</h5>
        </div>
      </div>
    </div>
    <!--      <div class="icons" id="icons" v-if="isEnter">-->
    <!--        <div class="icon" v-for="social in profileData.socials">-->
    <!--          <a :href="social.link" target="_blank"><img :src="'/img/social/'+social.type+'.png'" alt=""></a>-->
    <!--          <h5>{{social.url}}</h5>-->
    <!--        </div>-->
    <!--      </div>-->
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

main {
  overflow-x: hidden;
  overflow-y: hidden;
  cursor: url(/img/cursor/cursor.png) 16 16, auto;

  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  user-select: none;
  color: #fff;
  font-family: 'Fira Code', monospace;
}

#tempBackground {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(8px);
  z-index: 80;
}

#click-to-enter {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: none;
  border: none;
  font-size: 180%;
  font-weight: 500;
  z-index: 100;
}

#background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: brightness(0.6);
  z-index: -10;
}

/* CURSOR EFFECT - START */
/*.cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fff;
  clip-path: polygon(63% 92%, 63% 90%, 62% 88%, 62% 89%, 60% 89%, 60% 88%, 60% 87%, 61% 86%, 63% 84%, 62% 83%, 62% 83%, 61% 84%, 59% 85%, 59% 84%, 58% 83%, 60% 81%, 63% 79%, 63% 78%, 62% 78%, 60% 79%, 58% 80%, 57% 80%, 56% 76%, 56% 75%, 55% 75%, 54% 76%, 55% 78%, 54% 82%, 54% 82%, 52% 79%, 52% 78%, 51% 79%, 51% 79%, 51% 82%, 50% 84%, 50% 84%, 48% 83%, 48% 82%, 47% 83%, 46% 84%, 45% 84%, 44% 84%, 43% 83%, 45% 81%, 46% 80%, 45% 80%, 44% 79%, 44% 77%, 46% 78%, 48% 78%, 49% 77%, 49% 76%, 46% 75%, 47% 73%, 50% 73%, 52% 74%, 53% 73%, 53% 73%, 52% 72%, 48% 71%, 49% 69%, 50% 67%, 51% 66%, 50% 66%, 50% 66%, 48% 68%, 44% 70%, 44% 69%, 45% 67%, 46% 66%, 45% 66%, 44% 65%, 43% 67%, 41% 69%, 39% 68%, 40% 66%, 41% 66%, 39% 66%, 36% 65%, 36% 64%, 36% 63%, 38% 63%, 40% 62%, 39% 62%, 39% 61%, 40% 60%, 42% 61%, 43% 63%, 44% 63%, 46% 62%, 45% 62%, 44% 60%, 45% 59%, 48% 61%, 49% 63%, 50% 63%, 50% 62%, 49% 61%, 48% 59%, 49% 57%, 53% 56%, 54% 56%, 54% 56%, 53% 55%, 52% 55%, 49% 55%, 46% 55%, 46% 54%, 50% 53%, 50% 53%, 50% 52%, 49% 51%, 47% 51%, 45% 51%, 44% 51%, 44% 50%, 46% 49%, 46% 49%, 45% 47%, 43% 45%, 44% 43%, 47% 45%, 48% 46%, 48% 46%, 50% 44%, 51% 45%, 51% 47%, 51% 49%, 51% 49%, 52% 50%, 52% 50%, 53% 47%, 55% 47%, 55% 47%, 55% 49%, 55% 51%, 55% 52%, 55% 53%, 56% 54%, 56% 52%, 57% 49%, 58% 49%, 60% 50%, 62% 51%, 63% 51%, 63% 51%, 63% 50%, 62% 49%, 58% 46%, 59% 44%, 61% 45%, 62% 46%, 63% 45%, 63% 45%, 61% 43%, 60% 42%, 60% 41%, 60% 40%, 62% 40%, 62% 41%, 63% 39%, 63% 36%, 64% 36%, 65% 36%, 66% 39%, 66% 41%, 66% 40%, 68% 40%, 68% 41%, 68% 41%, 67% 43%, 66% 44%, 66% 45%, 66% 47%, 67% 45%, 69% 45%, 70% 46%, 67% 48%, 66% 50%, 66% 51%, 66% 51%, 67% 50%, 69% 49%, 71% 49%, 72% 53%, 73% 53%, 73% 53%, 73% 50%, 73% 47%, 74% 47%, 75% 49%, 75% 50%, 75% 50%, 76% 50%, 77% 49%, 77% 47%, 77% 44%, 79% 44%, 79% 46%, 79% 46%, 81% 45%, 83% 43%, 85% 45%, 82% 48%, 82% 49%, 82% 49%, 84% 50%, 83% 51%, 81% 51%, 79% 51%, 78% 52%, 78% 53%, 79% 53%, 82% 54%, 81% 55%, 76% 55%, 75% 56%, 74% 56%, 76% 57%, 79% 58%, 80% 58%, 80% 59%, 79% 61%, 77% 62%, 78% 63%, 79% 63%, 79% 62%, 81% 60%, 83% 59%, 84% 60%, 83% 62%, 82% 62%, 83% 63%, 84% 63%, 85% 62%, 86% 61%, 87% 60%, 89% 61%, 88% 62%, 88% 62%, 90% 63%, 92% 63%, 92% 64%, 92% 65%, 89% 66%, 87% 66%, 88% 66%, 88% 68%, 87% 69%, 87% 69%, 85% 68%, 84% 66%, 84% 66%, 83% 66%, 82% 66%, 82% 66%, 84% 69%, 84% 70%, 82% 70%, 80% 68%, 78% 66%, 77% 66%, 77% 66%, 78% 67%, 80% 71%, 75% 73%, 75% 73%, 75% 73%, 76% 74%, 78% 73%, 81% 74%, 82% 75%, 81% 75%, 79% 76%, 78% 76%, 79% 77%, 80% 78%, 81% 78%, 84% 78%, 84% 79%, 83% 80%, 82% 80%, 83% 81%, 85% 83%, 84% 84%, 83% 84%, 82% 84%, 81% 83%, 80% 82%, 80% 82%, 79% 84%, 77% 84%, 77% 82%, 77% 80%, 77% 79%, 76% 79%, 76% 78%, 76% 79%, 75% 82%, 74% 82%, 73% 82%, 73% 81%, 73% 76%, 73% 75%, 72% 74%, 72% 76%, 71% 80%, 67% 79%, 66% 78%, 66% 78%, 66% 79%, 67% 80%, 69% 82%, 70% 83%, 69% 84%, 68% 84%, 67% 83%, 66% 83%, 66% 84%, 65% 85%, 67% 86%, 68% 88%, 67% 89%, 66% 88%, 66% 88%, 66% 90%, 65% 92%, 63% 92%);
  animation: dropDown 1s linear;
}*/

/* Non utilisé pour le moment
@keyframes dropDown {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  100% {
    transform: translateY(150px) translateX(var(--randomX));
    opacity: 0;
  }
}
*/

.center {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 30px;
  border-radius: 20px;
}

.single-box {
  grid-template-columns: 1fr;
}

/* ---------------------------------------------------------------- */

.content .view {
  grid-column: 1 / 2;
  position: relative;
  font-size: 100%;
}

.content .view h3 {
  font-weight: 300;

}

.content .view h5 {
  font-weight: 300;
  text-shadow: 0 0 10px #c9c9c9;
  white-space: nowrap;
  opacity: 0;
  position: absolute;
  bottom: -35px;
  left: 8px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease;
}

.content .view:hover h5 {
  opacity: 1;
}

.content .view h5:hover {
  opacity: 0;
}

/* ---------------------------------------------------------------- */

.icons {
  display: block;
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 90;
}

.icons .icon {
  display: flex;
  margin-top: 50px;
}

.icons img {
  width: 20px;
  height: 20px;
  padding-right: 12px;
  cursor: pointer;
}

.icons h5 {
  font-size: 80%;
  font-weight: 300;
  text-shadow: 0 0 10px #c9c9c9;
  transition: 0.5s ease;
  opacity: 0;
}

.icons :hover h5 {
  opacity: 1;
}

.volume {
  display: block;
  position: fixed;
  z-index: 90;
}

.volume button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 90;
  background: none;
  border: none;
  font-size: 120%;
}

/* ---------------------------------------------------------------- */

@media screen and (max-width: 1000px) {
  body {
    overflow-y: auto;
  }

  .content {
    grid-template-columns: repeat(1, max-content);
    margin-top: 50px;
    margin-bottom: 50px;
  }

  /*.content .boxUser,
  .content .boxServer,
  .view {
    margin: 0 auto;
    /*width: 60%;
  }*/
}

@media screen and (max-width: 880px) {
  .content {
    transform: scale(0.9); /* Réduire la taille de tous les éléments de 20% */
  }
}

@media screen and (max-width: 500px) {
  .content {
    transform: scale(0.8); /* Réduire la taille de tous les éléments de 20% */
  }
}

@media screen and (max-width: 450px) {
  .content {
    transform: scale(0.7); /* Réduire la taille de tous les éléments de 20% */
  }
}
</style>
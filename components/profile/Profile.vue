<script setup lang="ts">
import Badges from '~/components/profile/saturne/Badges.vue';

const props = defineProps({
  isEnter: Boolean,
  data: Object
}) as { data: ProfileData, isEnter: boolean };

const quote = ref('');
const currentQuoteIndex = ref(0);

function smoothClearQuote() {
  let index = 0;
  const interval = setInterval(() => {
    if (quote.value.length > 0) {
      quote.value = quote.value.slice(0, -1);
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        currentQuoteIndex.value = (currentQuoteIndex.value + 1) % props.data.profile.quotes.length;
        smoothNewQuote();
      }, 400);
    }
  }, 80);
}

function smoothNewQuote() {
  const quoteToWrite = props.data.profile.quotes[currentQuoteIndex.value];
  let index = 0;
  const interval = setInterval(() => {
    if (index < quoteToWrite.length) {
      quote.value += quoteToWrite[index];
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        smoothClearQuote();
      }, 2000);
    }
  }, 150);
}

if (import.meta.client) {
  if (props.data.profile.quotes.length > 0) {
    smoothNewQuote();
  }
}
</script>

<template>
  <div class="profil">
    <div class="ppUser" :class="props.isEnter ? 'slide-enter-left' : ''">
      <img :src="`https://cdn.saturne.lol/file/profile/${props.data.global.userID}`" alt="" id="ppDisc"
           class="profile_outline">
      <img src="/public/img/avatardeco2.png" alt="" id="ppDeco" v-if="props.data.profile.username == 'Cleboost'">
      <img src="/public/img/avatardeco1.png" alt="" id="ppDeco" v-if="props.data.profile.username == 'BF'">
    </div>
    <div class="infoUser">
      <div class="nameBadges">
        <!-- NAME SATURNE -->
        <div class="name" :class="isEnter ? 'slide-enter-top ' : ''">
          <h1>{{ props.data.profile.username }}</h1>
        </div>
        <!-- BADGES -->
        <Badges :is-enter="props.isEnter" :data="data"/>
      </div>
      <div class="quote" v-if="props.data.profile.quotes.length > 0 || !props.data.profile.quotes"
           :class="isEnter ? 'slide-enter-right' : ''">
        <h3>{{ quote }}</h3>
      </div>
      <div class="description" :class="isEnter ? 'slide-enter-left' : ''">
        <h5>{{ props.data.profile.bio }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>

.profil {
  grid-column: 1 / -1;
  position: relative;
}

.content .profil,
.content .profil .nameBadges {
  display: flex;
  align-items: center;
  position: relative;
}

#badges {
  margin-left: 10px;
}

.profil .ppUser {
  position: relative;
}

.profil .ppUser #ppDisc {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /*border: 2px solid rgba(255, 255, 255, 0.50);*/
  object-fit: cover;
  margin-right: 20px;
}

.profil .ppUser #ppDeco {
  position: absolute;
  top: -12px;
  left: -12px;
  width: max-content;
  height: max-content;
  object-fit: cover;
}

.infoUser .nameBadges {
  position: relative;
}

.profil .infoUser .nameBadges h1 {
  font-size: 200%;
  font-weight: 600;
  text-shadow: 0 0 10px #c9c9c9;
  letter-spacing: 2px;
  margin-right: 10px;
}

.profil .infoUser .quote {
  min-height: 30px;
  white-space: nowrap;
}

/* TEXT TYPING */
.profil .infoUser .quote h3::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 2px;
  background: #fff;
  box-shadow: 0 0 10px #c9c9c9;
  animation: blink 0.7s infinite;
  margin-top: 4px;
  margin-left: 3px;
}

.profil .infoUser .quote h3.stop-blinking::before {
  animation: none;
}

@keyframes blink {
  50% {
    opacity: 0
  }
}

.profil .infoUser .quote h3,
.profil .infoUser .description h5 {
  font-weight: 500;
}

.profil .infoUser .quote h3 {
  position: absolute;
  font-size: 110%;
  text-shadow: 0 0 10px #c9c9c9;
}

.profil .infoUser .description h5 {
  color: rgb(255, 255, 255, 0.6);
}
</style>
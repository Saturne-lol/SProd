<script setup lang="ts">
import Badges from "~/components/profile/saturne/Badges.vue";

const data = defineProps<{
  profile: {
    username: string,
    bio: string,
    avatar: string,
    quotes: Array<string>
  },
  badges: {
    name: string,
    image: string
  }[]
}>()

const quote = ref("")
const currentQuoteIndex = ref(0)

function smoothClearQuote() {
  let index = 0;
  const interval = setInterval(() => {
    if (quote.value.length > 0) {
      quote.value = quote.value.slice(0, -1);
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        currentQuoteIndex.value = (currentQuoteIndex.value + 1) % data.profile.quotes.length;
        smoothNewQuote();
      }, 400);
    }
  }, 80);
}

function smoothNewQuote() {
  const quoteToWrite = data.profile.quotes[currentQuoteIndex.value];
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


if (data.profile.quotes.length > 0) {
  smoothNewQuote()
}


const {gtag} = useGtag()
gtag('config', 'G-YKC5TQ8C98', {
  'user_id': "coucou c'est moi"
})
</script>

<template>
  <div class="profil">
    <div class="ppUser">
      <img :src="`https://cdn.saturne.lol/file/profile/${data.profile.avatar}`" alt="" id="ppDisc">
      <img src="/public/img/avatardeco2.png" alt="" id="ppDeco" v-if="data.profile.username == 'Cleboost'">
    </div>
    <div class="infoUser">
      <div class="nameBadges">
        <!-- NAME SATURNE -->
        <div class="name">
          <h1>{{ data.profile.username }}</h1>
        </div>
        <!-- BADGES -->
        <Badges :badges="data.badges"/>
      </div>
      <div class="quote" v-if="data.profile.quotes.length > 0 || !data.profile.quotes">
        <h3>{{ quote }}</h3>
      </div>
      <div class="description">
        <h5>{{ data.profile.bio }}</h5>
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
  /* border: 2px solid rgba(255, 255, 255, 0.50); */
  object-fit: cover;
  margin-right: 20px;
}

.profil .ppUser #ppDeco {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 120px;
  height: 120px;
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
}

/* TEXT TYPING */
.profil .infoUser .quote h3::after {
  position: absolute;
  content: "";
  height: 18px;
  width: 2px;
  background: #fff;
  box-shadow: 0 0 10px #c9c9c9;
  animation: blink 0.7s infinite;
  margin-top: 5px;
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
  text-shadow: 0 0 10px #c9c9c9;
}

.profil .infoUser .description h5 {
  color: rgb(255, 255, 255, 0.6);
}
</style>
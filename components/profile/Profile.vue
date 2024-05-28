<script setup lang="ts">
import Badges from "~/components/profile/saturne/Badges.vue";

const data = defineProps<{
  profile: {
    username: string,
    bio: string,
    avatar: string,
    quotes: Array<string>,
  },
  badges: Array<{
    name: string,
    image: string
  }>
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

smoothNewQuote()
</script>

<template>
  <div class="profil">
    <div class="ppUser">
      <img :src="data.profile.avatar" alt="" id="ppDisc">
      <img src="~/public/img/avatardeco2.png" alt="" id="ppDeco" style="display: none;">
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
      <div class="quote">
        <h3>{{ quote }}</h3>
      </div>
      <div class="description">
        <h5>{{ data.profile.bio }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
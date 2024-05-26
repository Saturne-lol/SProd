<script setup lang="ts">
import type {Ref} from "vue";
import Badges from "~/components/profile/saturne/Badges.vue";

const username = defineProps<{
  username: string | string[]
}>()

const {pending, data: profile} = await useFetch(`/api/profile/get-profile`, {query: {username: username.username}, lazy: true}) as {
  pending: Ref<boolean>,
  data: Ref<{
    username: string,
    bio: string,
    avatar: string,
    quotes: Array<string>,
  }>
}

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
        currentQuoteIndex.value = (currentQuoteIndex.value + 1) % profile.value.quotes.length;
        smoothNewQuote();
      }, 400);
    }
  }, 80);
}

function smoothNewQuote() {
  const quoteToWrite = profile.value.quotes[currentQuoteIndex.value];
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

if (process.client) {
  watch(pending, (value) => {
    if (!value) {
      smoothNewQuote();
    }
  });
}
</script>

<template>
  <div class="profil">
    <div class="ppUser">
      <img :src="pending ? '' : profile.avatar" alt="">
    </div>
    <div class="infoUser">
      <div class="nameBadges">
        <!-- NAME SATURNE -->
        <div class="name">
          <h1>{{ pending ? "Loading..." : profile.username }}</h1>
        </div>
        <!-- BADGES -->
        <Badges :username="username.username"/>
      </div>
      <div class="quote">
        <h3>{{ pending ? "Loading..." : quote }}</h3>
      </div>
      <div class="description">
        <h5>{{ pending ? "Loading..." : profile.bio }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
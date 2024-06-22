<script setup lang="ts">

import { ref } from 'vue'

const title = ref('')
const description = ref('')

function submit() {
  console.log(title.value, description.value)
}
</script>

<template>
  <label>Title</label>
  <br/>
  <input type="text" v-model="title"/>
  <br/><br/>
  <label>Description</label>
  <br/>
  <textarea v-model="description"></textarea>
</template>

<style scoped>
  input {
    box-sizing: border-box;
    border: 2px solid #ccc;
  }

  textarea {
    box-sizing: border-box;
    border: 2px solid #ccc;
  }
</style>
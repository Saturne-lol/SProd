<script setup lang="ts">
import type {NuxtError} from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

if (process.client) {
  switch (props?.error?.statusCode) {
    case 500:
      window.location.href = '/500?error=500'
      break
    case 404:
      window.location.href = '/404?type=404'
      break
    default:
      window.location.href = `/${props?.error?.statusCode}`
      break
  }
}
</script>

<template>
  <div>
    <h1>Error</h1>
  </div>
</template>
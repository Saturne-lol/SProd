<script setup lang="ts">
import type {NuxtError} from '#app'
import {useRouter} from 'vue-router'

const props = defineProps({
  error: Object as () => NuxtError
})

const router = useRouter()

if (process.client) {
  switch (props?.error?.statusCode) {
    case 500:
      router.push('/errors/500?error=500')
      break
    case 404:
      router.push('/errors/404')
      break
    default:
      router.push(`/errors/${props?.error?.statusCode}`)
      break
  }
}
</script>
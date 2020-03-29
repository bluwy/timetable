<template>
  <div class="flex justify-center items-center h-screen">
    <CurrentSchedule class="max-w-md" />
  </div>
</template>

<script>
import CurrentSchedule from '@/components/CurrentSchedule.vue'

export default {
  name: 'Home',
  components: {
    CurrentSchedule
  }
}
</script>

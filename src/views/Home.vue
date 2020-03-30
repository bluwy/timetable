<template>
  <div class="flex justify-center items-center h-screen">
    <CurrentSchedule class="max-w-md container" />
    <NextSchedule class="fixed bottom-0" />
  </div>
</template>

<script>
import CurrentSchedule from '@/components/CurrentSchedule.vue'
import NextSchedule from '@/components/NextSchedule.vue'

export default {
  name: 'Home',
  components: {
    CurrentSchedule,
    NextSchedule
  }
}
</script>

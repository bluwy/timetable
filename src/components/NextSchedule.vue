<template>
  <div v-if="nextSchedule" class="text-center mb-5">
    <div class="opacity-50">NEXT</div>
    <div class="text-2xl leading-none my-2">
      {{ nextSchedule.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NextSchedule',
  computed: {
    ...mapGetters(['nextSchedule'])
  }
}
</script>

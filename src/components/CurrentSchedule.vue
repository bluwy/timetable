<template>
  <div v-if="currentSchedule">
    <div class="flex font-bold opacity-75">
      <div class="flex-grow">
        <fa-icon class="mr-1 opacity-50" :icon="['fas', 'user']" />
        {{ currentSchedule.teacher }}
      </div>
      <div class="flex-shrink">
        {{ currentSchedule.location }}
        <fa-icon class="ml-1 opacity-50" :icon="['fas', 'map-marker-alt']" />
      </div>
    </div>
    <div
      class="text-4xl font-bold sm:text-5xl sm:font-normal text-center leading-none mt-3 mb-5"
    >
      {{ currentSchedule.name }}
    </div>
    <div class="text-center">
      <div class="inline-block">
        <div class="flex">
          <div class="mr-12">
            <div class="text-xs opacity-75 text-center">FROM</div>
            <div class="text-2xl">{{ currentSchedule.startTime }}</div>
          </div>
          <div>
            <div class="text-xs opacity-75 text-center">TO</div>
            <div class="text-2xl">{{ currentSchedule.endTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CurrentSchedule',
  computed: {
    ...mapGetters(['currentSchedule'])
  }
}
</script>

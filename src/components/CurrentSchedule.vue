<template>
  <div v-if="currentSchedule">
    <div class="flex text-sm opacity-75">
      <div class="flex-grow">{{ currentSchedule.teacher }}</div>
      <div class="flex-shrink">
        {{ currentSchedule.location }}
      </div>
    </div>
    <div class="text-5xl text-center leading-none my-5">
      {{ currentSchedule.name }}
    </div>
    <div class="text-center">
      <div class="inline-block">
        <div class="flex">
          <div class="mr-12">
            <div class="text-xs opacity-75 text-center">FROM</div>
            <div class="text-2xl">{{ startTime }}</div>
          </div>
          <div>
            <div class="text-xs opacity-75 text-center">TO</div>
            <div class="text-2xl">{{ endTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatTime } from '@/util'

export default {
  name: 'CurrentSchedule',
  computed: {
    ...mapGetters(['currentSchedule']),
    startTime() {
      return this.currentSchedule
        ? formatTime(
            this.currentSchedule.startHour,
            this.currentSchedule.startMinute
          )
        : ''
    },
    endTime() {
      return this.currentSchedule
        ? formatTime(
            this.currentSchedule.endHour,
            this.currentSchedule.endMinute
          )
        : ''
    }
  }
}
</script>

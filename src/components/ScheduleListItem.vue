<template>
  <div class="p-3 rounded-lg border-2 border-purple-300">
    <div class="text-lg font-bold">{{ schedule.name }}</div>
    <div>Start {{ startTime }}</div>
    <div>End {{ endTime }}</div>
  </div>
</template>

<script>
import { formatTime } from '@/util'

export default {
  name: 'ScheduleListItem',
  props: {
    schedule: {
      type: Object,
      required: true
    }
  },
  computed: {
    startTime() {
      return this.schedule
        ? formatTime(this.schedule.startHour, this.schedule.startMinute)
        : ''
    },
    endTime() {
      return this.schedule
        ? formatTime(this.schedule.endHour, this.schedule.endMinute)
        : ''
    }
  }
}
</script>

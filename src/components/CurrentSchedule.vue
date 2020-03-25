<template>
  <div>
    <div class="flex text-sm opacity-75">
      <div class="flex-grow">{{ schedule.teacher }}</div>
      <div class="flex-shrink">
        {{ schedule.location }}
      </div>
    </div>
    <div class="text-5xl text-center leading-none my-5">
      {{ schedule.name }}
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
export default {
  name: 'CurrentSchedule',
  props: {
    schedule: {
      type: Object,
      required: true
    }
  },
  computed: {
    startTime() {
      const hour = this.schedule.startHour.toString().padStart('2', '0')
      const minute = this.schedule.startMinute.toString().padStart('2', '0')

      return hour + ':' + minute
    },
    endTime() {
      const hour = this.schedule.endHour.toString().padStart('2', '0')
      const minute = this.schedule.endMinute.toString().padStart('2', '0')

      return hour + ':' + minute
    }
  }
}
</script>

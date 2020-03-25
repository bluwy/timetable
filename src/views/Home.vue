<template>
  <div
    class="flex justify-center items-center h-screen"
    :class="{
      'text-white': isCurrentColorDark,
      'text-black': !isCurrentColorDark
    }"
    :style="{
      background: `linear-gradient(270deg, ${currentColor}, ${currentTintColor})`
    }"
  >
    <div class="max-w-md">
      <CurrentSchedule v-if="currentSchedule" :schedule="currentSchedule" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CurrentSchedule from '@/components/CurrentSchedule.vue'
import { hexToHsl, isColorDark } from '@/util'

export default {
  name: 'Home',
  components: {
    CurrentSchedule
  },
  data: () => ({
    currentDate: new Date()
  }),
  computed: {
    ...mapGetters(['findSchedule', 'findNextSchedule']),
    currentSchedule() {
      const day = this.currentDate.getDay()
      const hour = this.currentDate.getHours()
      const minute = this.currentDate.getMinutes()

      return this.findSchedule(day, hour, minute)
    },
    nextSchedule() {
      const day = this.currentDate.getDay()
      const hour = this.currentDate.getHours()
      const minute = this.currentDate.getMinutes()

      return this.findNextSchedule(day, hour, minute)
    },
    currentColor() {
      return (this.currentSchedule && this.currentSchedule.color) || '#123456'
    },
    currentTintColor() {
      const { h, s, l } = hexToHsl(this.currentColor)
      const extraLight = 20

      return `hsl(${h * 360}, ${s * 100}%, ${l * 100 + extraLight}%)`
    },
    isCurrentColorDark() {
      return isColorDark(this.currentColor)
    }
  },
  mounted() {
    // To make `currentDate` reactive, we have to re-assign it.
    // But re-assigning it every second may cause unneccessary re-calculations.
    // So we continuously check if current time passes the next schedule's start
    // time before re-assigning.
    setInterval(() => {
      if (this.nextSchedule) {
        const newDate = new Date()

        if (
          newDate.getHours() >= this.nextSchedule.startHour &&
          newDate.getMinutes() >= this.nextSchedule.startMinute
        ) {
          this.currentDate = newDate
        }
      }
    }, 1000)
  }
}
</script>

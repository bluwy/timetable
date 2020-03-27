<template>
  <div
    id="app"
    class="h-screen"
    :class="isCurrentColorDark ? 'text-white' : 'text-black'"
    :style="{
      background: `linear-gradient(270deg, ${currentColor}, ${currentTintColor})`
    }"
  >
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'
import { hexToHsl } from '@/util'

export default {
  name: 'App',
  components: {
    TheNavbar
  },
  computed: {
    ...mapGetters(['currentColor', 'isCurrentColorDark']),
    currentTintColor() {
      const { h, s, l } = hexToHsl(this.currentColor)
      const extraLight = 20

      return `hsl(${h * 360}, ${s * 100}%, ${l * 100 + extraLight}%)`
    }
  },
  mounted() {
    // To make vuex `currentDate` reactive, we have to re-assign it.
    // But re-assigning it every second may cause unneccessary re-calculations.
    // So we continuously check if current time passes the next schedule's start
    // time before re-assigning.
    setInterval(() => {
      if (
        this.nextSchedule &&
        new Date().getHours() >= this.nextSchedule.startHour &&
        new Date().getMinutes() >= this.nextSchedule.startMinute
      ) {
        this.resetDate()
      }
    }, 1000)
  },
  methods: {
    ...mapActions(['resetDate'])
  }
}
</script>

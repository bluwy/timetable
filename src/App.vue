<template>
  <div
    id="app"
    class="min-h-screen"
    :class="isCurrentColorDark ? 'app-dark text-white' : 'app-light text-black'"
    :style="{
      background: `linear-gradient(315deg, ${currentColor}, ${currentTintColor})`
    }"
  >
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TheNavbar from '@/components/TheNavbar.vue'
import { hexToHsl, parseTime } from '@/util'

export default {
  name: 'App',
  components: {
    TheNavbar
  },
  computed: {
    ...mapGetters([
      'currentColor',
      'isCurrentColorDark',
      'currentSchedule',
      'nextSchedule'
    ]),
    currentTintColor() {
      const { h, s, l } = hexToHsl(this.currentColor)
      const extraLight = 10

      return `hsl(${h * 360}, ${s * 100}%, ${l * 100 + extraLight}%)`
    },
    currentParseEndTime() {
      if (!this.currentSchedule) {
        return undefined
      }

      return parseTime(this.currentSchedule.endTime)
    },
    nextParsedStartTime() {
      if (!this.nextSchedule) {
        return undefined
      }

      return parseTime(this.nextSchedule.startTime)
    }
  },
  mounted() {
    // To make vuex `currentDate` reactive, we have to re-assign it.
    // But re-assigning it every second may cause unneccessary re-calculations.
    // So we continuously check if current time passes the next schedule's start
    // time before re-assigning.
    setInterval(() => {
      const nowHour = new Date().getHours()
      const nowMinute = new Date().getMinutes()

      const passedCurrentEndTime =
        this.currentParseEndTime &&
        nowHour >= this.currentParseEndTime.hour &&
        nowMinute >= this.currentParseEndTime.minute

      const passedNextStartTime =
        this.nextParsedStartTime &&
        nowHour >= this.nextParsedStartTime.hour &&
        nowMinute >= this.nextParsedStartTime.minute

      if (passedCurrentEndTime || passedNextStartTime) {
        this.resetDate()
      }
    }, 1000)
  },
  methods: {
    ...mapActions(['resetDate'])
  }
}
</script>

<style lang="postcss">
#app {
  transition: background 2s ease;
}

.btn {
  transition: background-color 0.2s ease;
  @apply font-bold py-1 px-2 rounded border;
}

.app-dark .btn {
  background-color: rgba(255, 255, 255, 0.1);
  @apply border-white;
}

.app-dark .btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.app-dark .btn:focus {
  background-color: rgba(255, 255, 255, 0.25);
}

.app-light .btn {
  background-color: rgba(0, 0, 0, 0.1);
  @apply border-black;
}

.app-light .btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.app-light .btn:focus {
  background-color: rgba(0, 0, 0, 0.25);
}

/* VueFormulate styles */
.formulate-input {
  @apply mb-3;
}

.formulate-input-element {
  @apply relative;
}

.formulate-input-element input,
.formulate-input-element select {
  transition: background-color 0.2s ease;
  @apply w-full px-2 py-1 border rounded-sm;
}

.app-dark .formulate-input-element input,
.app-dark .formulate-input-element select {
  background-color: rgba(255, 255, 255, 0.1);
  @apply border-white;
}

.app-dark .formulate-input-element input:focus,
.app-dark .formulate-input-element select:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.app-light .formulate-input-element input,
.app-light .formulate-input-element select {
  background-color: rgba(0, 0, 0, 0.1);
  @apply border-black;
}

.app-light .formulate-input-element input:focus,
.app-light .formulate-input-element select:focus {
  background-color: rgba(0, 0, 0, 0.2);
}

.formulate-input-dropdown {
  position: absolute;
  z-index: 1;
  width: 100%;
  @apply text-white bg-black;
}

.formulate-input-dropdown li {
  @apply px-2 py-1;
}

.formulate-input-dropdown li[data-is-selected='true'] {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>

<template>
  <div
    class="item-bg p-3"
    :class="isCurrentColorDark ? 'item-bg--white' : 'item-bg--black'"
  >
    <div class="text-sm font-bold opacity-75">
      {{ schedule.startTime }} - {{ schedule.endTime }}
    </div>
    <div class="text-lg font-bold">{{ schedule.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ScheduleListItem',
  props: {
    schedule: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isCurrentColorDark'])
  }
}
</script>

<style lang="postcss" scoped>
.item-bg {
  position: relative;
}

.item-bg:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  transition: opacity 0.3s ease;
  @apply rounded;
}

.item-bg:hover:before {
  opacity: 0.2;
}

.item-bg--white:before {
  @apply bg-white;
}

.item-bg--black:before {
  @apply bg-black;
}
</style>

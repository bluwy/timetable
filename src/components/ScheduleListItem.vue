<template>
  <div>
    <div
      class="item-bg p-3"
      :class="isCurrentColorDark ? 'item-bg--white' : 'item-bg--black'"
      @click.prevent="showScheduleDialog = true"
    >
      <div class="text-sm font-bold opacity-75">
        {{ schedule.startTime }} - {{ schedule.endTime }}
      </div>
      <div class="text-lg font-bold">{{ schedule.name }}</div>
    </div>
    <ScheduleDialog
      v-if="showScheduleDialog"
      :base-form="scheduleForm"
      header="Update Schedule"
      @close="showScheduleDialog = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ScheduleDialog from '@/components/ScheduleDialog.vue'

export default {
  name: 'ScheduleListItem',
  components: {
    ScheduleDialog
  },
  props: {
    schedule: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showScheduleDialog: false
  }),
  computed: {
    ...mapGetters(['isCurrentColorDark']),
    scheduleForm() {
      // If day is 0, the input will treat as '' for some reason (vue-formulate bug)
      // Converting it to string format bypasses this oddity
      return { ...this.schedule, day: this.schedule.day.toString() }
    }
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

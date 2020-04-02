<template>
  <div>
    <div v-for="group in groupedSchedules" :key="group.groupName" class="mb-8">
      <div class="text-2xl font-light my-3">{{ group.groupName }}</div>
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="schedule in group.schedules"
          :key="schedule.id"
          class="px-2 mb-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <ScheduleListItem class="h-full" :schedule="schedule" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ScheduleListItem from '@/components/ScheduleListItem.vue'
import { weekdays } from '@/util'

function defaultGroupSchedule() {
  return weekdays.map(v => ({
    groupName: v,
    schedules: []
  }))
}

export default {
  name: 'ScheduleList',
  components: {
    ScheduleListItem
  },
  computed: {
    ...mapGetters(['sortedSchedules']),
    groupedSchedules() {
      return this.sortedSchedules
        .reduce((acc, schedule) => {
          acc[schedule.day].schedules.push(schedule)
          return acc
        }, defaultGroupSchedule())
        .filter(v => v.schedules.length)
    }
  }
}
</script>

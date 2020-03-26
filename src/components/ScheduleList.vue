<template>
  <div>
    <div v-for="group in groupedSchedules" :key="group.groupName">
      <div class="text-3xl font-light my-3">{{ group.groupName }}</div>
      <div class="flex">
        <ScheduleListItem
          v-for="schedule in group.schedules"
          :key="getScheduleKey(schedule)"
          class="w-full md:w-1/2 lg:w-1/3"
          :schedule="schedule"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ScheduleListItem from '@/components/ScheduleListItem.vue'

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

function defaultGroupSchedule() {
  return dayNames.map(v => ({
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
  },
  methods: {
    getScheduleKey(schedule) {
      return (
        schedule.name +
        schedule.startHour +
        schedule.startMinute +
        schedule.endHour +
        schedule.endMinute
      )
    },
    dayToName(day) {
      return dayNames[day]
    },
    daySchedules(day) {
      return this.sortedSchedules.filter(v => v.day === day)
    }
  }
}
</script>

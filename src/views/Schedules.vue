<template>
  <div class="container pb-1">
    <ScheduleList />
  </div>
</template>

<script>
import ScheduleList from '@/components/ScheduleList.vue'

export default {
  name: 'Schedules',
  components: {
    ScheduleList
  }
}
</script>

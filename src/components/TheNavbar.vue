<template>
  <div :class="{ 'w-full fixed': $route.name === 'Home' }">
    <div class="container flex flex-row-reverse items-center">
      <template v-if="$route.name === 'Home'">
        <router-link class="p-3" to="/settings">
          <fa-icon :icon="['fas', 'cog']" />
        </router-link>
        <router-link class="p-3" to="/schedules">
          <fa-icon :icon="['fas', 'calendar-alt']" />
        </router-link>
        <router-link class="p-3" to="/help">
          <fa-icon :icon="['fas', 'question']" />
        </router-link>
      </template>
      <template v-else-if="$route.name === 'Schedules'">
        <router-link class="p-3" to="/">
          <fa-icon :icon="['fas', 'times']" />
        </router-link>
        <div>
          <ScheduleDialog
            v-if="showScheduleDialog"
            header="New Schedule"
            @close="showScheduleDialog = false"
          />
          <button class="btn" @click.stop="showScheduleDialog = true">
            <fa-icon class="text-xs" :icon="['fas', 'plus']" />
            New Schedule
          </button>
        </div>
      </template>
      <template v-else>
        <router-link class="p-3" to="/">
          <fa-icon :icon="['fas', 'times']" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import ScheduleDialog from '@/components/ScheduleDialog.vue'

export default {
  name: 'TheNavbar',
  components: {
    ScheduleDialog
  },
  data: () => ({
    showScheduleDialog: false
  })
}
</script>

<template>
  <div
    class="overlay fixed top-0 left-0 w-screen h-screen z-10 flex justify-center items-center"
  >
    <div
      class="rounded w-full max-w-md max-h-screen p-4 m-3"
      :style="{ 'background-color': currentColor }"
    >
      <div class="flex">
        <div class="flex-grow text-xl">
          New Schedule
        </div>
        <div class="flex-shrink">
          <button @click="$emit('close')">
            <fa-icon :icon="['fas', 'times']" />
          </button>
        </div>
      </div>
      <FormulateForm class="py-3" :values="baseForm" @submit="submit">
        <div class="flex -mx-2">
          <div class="w-1/2 px-2">
            <FormulateInput
              type="text"
              name="name"
              label="Name"
              validation="required"
            />
          </div>
          <div class="w-1/2 px-2">
            <FormulateInput
              type="color-ex"
              name="color"
              label="Color"
              :options="colors"
            />
          </div>
        </div>
        <div class="flex -mx-2">
          <div class="w-1/2 px-2">
            <FormulateInput
              type="autocomplete"
              name="teacher"
              label="Teacher (optional)"
              :options="allTeachers"
            />
          </div>
          <div class="w-1/2 px-2">
            <FormulateInput
              type="autocomplete"
              name="location"
              label="Location (optional)"
              :options="allLocations"
            />
          </div>
        </div>
        <div class="flex -mx-2">
          <div class="w-1/2 px-2">
            <FormulateInput
              type="select"
              name="day"
              label="Day"
              placeholder="Select day of schedule"
              validation="required"
              :options="scheduleDays"
            />
          </div>
          <div class="w-1/4 px-2">
            <FormulateInput
              type="time"
              name="startTime"
              label="From"
              validation="required"
            />
          </div>
          <div class="w-1/4 px-2">
            <FormulateInput
              type="time"
              name="endTime"
              label="To"
              validation="required"
            />
          </div>
        </div>
        <div class="text-right">
          <button class="btn" type="submit">OK</button>
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CreateScheduleDialog',
  props: {
    baseForm: {
      type: Object,
      default: () => ({
        name: '',
        teacher: '',
        location: '',
        color: '#123456',
        day: undefined,
        startTime: undefined,
        endTime: undefined
      })
    }
  },
  data: () => ({
    newForm: {}
  }),
  computed: {
    ...mapGetters(['currentColor', 'teachers', 'locations', 'colors']),
    allTeachers() {
      return this.teachers.map(v => ({ label: v, value: v }))
    },
    allLocations() {
      return this.locations.map(v => ({ label: v, value: v }))
    },
    scheduleDays() {
      return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ].reduce((obj, v, i) => ({ ...obj, [i]: v }), {})
    }
  },
  methods: {
    ...mapActions(['addSchedule']),
    submit(data) {
      data.day = parseInt(data.day)

      this.addSchedule({ schedule: data })
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'

/**
 * @typedef {object} Schedule
 * @property {string} name
 * @property {string} teacher
 * @property {string} location
 * @property {string} color
 * @property {number} day
 * @property {number} startHour
 * @property {number} startMinute
 * @property {number} endHour
 * @property {number} endMinute
 */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /** @type {Schedule[]} */
    schedules: []
  },
  mutations: {
    ADD_SCHEDULE(state, { schedule }) {
      state.schedules.push(schedule)
    },
    UPDATE_SCHEDULE(state, { index, schedule }) {
      state.schedules.splice(index, 1, schedule)
    },
    REMOVE_SCHEDULE(state, { index }) {
      state.schedules.splice(index, 1)
    }
  },
  actions: {
    addSchedule({ commit }, { schedule }) {
      commit('ADD_SCHEDULE', { schedule })
    },
    updateSchedule({ commit }, { index, schedule }) {
      commit('UPDATE_SCHEDULE', { index, schedule })
    },
    removeSchedule({ commit }, { index }) {
      commit('REMOVE_SCHEDULE', { index })
    }
  },
  getters: {
    /** Finds a schedule for a time */
    findSchedule: state => (day, hour, minute) => {
      return state.schedules.find(schedule => {
        if (schedule.day !== day) {
          return false
        }

        return (
          (hour > schedule.startHour && hour < schedule.endHour) ||
          (hour === schedule.startHour && minute > schedule.startMinute) ||
          (hour === schedule.endHour && minute < schedule.endMinute)
        )
      })
    },
    /** Finds the next schedule for a time, limited to that day */
    findNextSchedule: (state, getters) => (day, hour, minute) => {
      return getters.sortedSchedules.find(schedule => {
        if (schedule.day !== day) {
          return false
        }

        return hour <= schedule.startHour && minute < schedule.startMinute
      })
    },
    /** Sorts schedules ascendingly by day and startHour */
    sortedSchedules(state) {
      return state.schedules.sort((a, b) => {
        // Merge hour and minute to 24-hour format
        const startTimeA = a.startHour * 100 + a.startMinute
        const startTimeB = b.startHour * 100 + b.startMinute

        return a.day - b.day || startTimeA - startTimeB
      })
    }
  }
})

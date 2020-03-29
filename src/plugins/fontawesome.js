import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCalendarAlt,
  faCog,
  faPlus,
  faTimes,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'

library.add(faCalendarAlt, faCog, faPlus, faTimes, faQuestion)

Vue.component('fa-icon', FontAwesomeIcon)

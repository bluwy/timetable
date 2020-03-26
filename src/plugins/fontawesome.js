import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faTimes, faQuestion } from '@fortawesome/free-solid-svg-icons'

library.add(faCog, faTimes, faQuestion)

Vue.component('fa-icon', FontAwesomeIcon)

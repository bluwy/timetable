import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import FormulateInputAutocomplete from '@/components/FormulateInputAutocomplete.vue'
import FormulateInputColor from '@/components/FormulateInputColor.vue'

Vue.component('FormulateInputAutocomplete', FormulateInputAutocomplete)
Vue.component('FormulateInputColor', FormulateInputColor)

Vue.use(VueFormulate, {
  library: {
    autocomplete: {
      classification: 'text',
      component: 'FormulateInputAutocomplete'
    },
    'color-ex': {
      classification: 'text',
      component: 'FormulateInputColor'
    }
  }
})

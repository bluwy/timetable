<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <input
      v-model="context.model"
      type="text"
      v-bind="context.attributes"
      autocomplete="no"
      @keydown.enter.prevent="context.model = selection.label"
      @keydown.down.prevent="increment()"
      @keydown.up.prevent="decrement()"
      @blur="context.blurHandler"
    />
    <ul v-show="filteredOptions.length" class="formulate-input-dropdown">
      <li
        v-for="(option, index) in filteredOptions"
        :key="option.value"
        :data-is-selected="selection && selection.value === option.value"
        @mouseenter="selectedIndex = index"
        @click="context.model = selection.label"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FormulateInputAutocomplete',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    selectedIndex: 0
  }),
  computed: {
    model() {
      return this.context.model
    },
    filteredOptions() {
      if (this.context.model && Array.isArray(this.context.options)) {
        const model = this.context.model.toLowerCase()

        return this.context.options.filter(option => {
          const label = option.label.toLowerCase()
          return label !== model && label.includes(model)
        })
      }

      return []
    },
    selection() {
      return this.filteredOptions[this.selectedIndex]
    }
  },
  watch: {
    model() {
      this.selectedIndex = 0
    }
  },
  methods: {
    increment() {
      if (this.selectedIndex + 1 < this.filteredOptions.length) {
        this.selectedIndex++
      } else {
        this.selectedIndex = 0
      }
    },
    decrement() {
      if (this.selectedIndex - 1 >= 0) {
        this.selectedIndex--
      } else {
        this.selectedIndex = this.filteredOptions.length - 1
      }
    }
  }
}
</script>

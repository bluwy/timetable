<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
    <div class="flex">
      <div class="flex-shrink h-full mr-2">
        <input
          v-model="context.model"
          class="color-input"
          type="color"
          autocomplete="no"
          @blur="context.blurHandler"
        />
      </div>
      <div class="text-input-wrapper flex-grow relative">
        <input
          v-model="context.model"
          type="text"
          v-bind="context.attributes"
          autocomplete="no"
          @keydown.enter.prevent="context.model = selection || context.model"
          @keydown.down.prevent="increment()"
          @keydown.up.prevent="decrement()"
          @blur="context.blurHandler"
        />
        <ul v-show="colorOptions.length" class="formulate-input-dropdown">
          <li
            v-for="(option, index) in colorOptions"
            :key="option"
            class="color-option inline-block m-1 rounded-full border border-white"
            :style="{ 'background-color': option }"
            :data-is-selected="selection === option"
            @mouseenter="selectedIndex = index"
            @click="context.model = selection"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormulateInputColor',
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
    colorOptions() {
      // Return empty for now, cause I don't want to deal with dropdown auto-hide
      return []
      // return this.context.options || []
    },
    selection() {
      return this.colorOptions[this.selectedIndex]
    }
  },
  watch: {
    model() {
      this.selectedIndex = 0
    }
  },
  methods: {
    increment() {
      if (this.selectedIndex + 1 < this.colorOptions.length) {
        this.selectedIndex++
      } else {
        this.selectedIndex = 0
      }
    },
    decrement() {
      if (this.selectedIndex - 1 >= 0) {
        this.selectedIndex--
      } else {
        this.selectedIndex = this.colorOptions.length - 1
      }
    }
  }
}
</script>

<style scoped>
.color-input {
  width: 34px;
  height: 34px;
}

.color-option {
  width: 1.2rem;
  height: 1.2rem;
}

.formulate-input-dropdown li[data-is-selected='true'] {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>

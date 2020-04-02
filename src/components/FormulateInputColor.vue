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
          v-bind="context.attributes"
          type="text"
          autocomplete="no"
          :list="listId"
          @blur="context.blurHandler"
        />
        <datalist :id="listId">
          <option v-for="c in choices" :key="c" :value="c" />
        </datalist>
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
  computed: {
    listId() {
      return 'list_' + this.context.id
    },
    choices() {
      // Previously `this.context.options` but it was hella buggy
      return this.context.attributes.choices
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

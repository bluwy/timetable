<template>
  <div
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
  >
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

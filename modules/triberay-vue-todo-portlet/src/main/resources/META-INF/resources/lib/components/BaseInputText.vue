<template>
  <div class="md-form">
    <svg class="lexicon-icon">
      <use :href="$config.spritemap + 'pencil'" />
    </svg>
    <input
      id="input1"
      :value="value"
      type="text"
      class="form-control"
      v-on="listeners"
    >
    <label for="input1">New To Do</label>
  </div>
</template>

<script>
    export default {
      props: {
          value: {
              type: String,
              default: '',
          }
      },
      computed: {
          listeners () {
              return {
                  // Pass all component listeners directly to input
                  ...this.$listeners,
                  // Override input listener to work with v-model
                  input: event => this.$emit('input', event.target.value)
              }
          }
      }
    }
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .input {
        padding: 8px 10px;
        margin: 5px;
        border: 1px solid $triberay-light-blue;
    }
</style>

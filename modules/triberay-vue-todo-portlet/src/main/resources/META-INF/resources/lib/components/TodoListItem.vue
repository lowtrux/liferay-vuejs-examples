<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title v-html="todo.text"/>
    </v-list-tile-content>
    <v-divider/>
    <v-list-tile-action
      :key="todo.text"
      @click="$emit('remove', todo.id)">
      <v-icon>delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
  .v-icon {
    cursor: pointer;
  }
</style>

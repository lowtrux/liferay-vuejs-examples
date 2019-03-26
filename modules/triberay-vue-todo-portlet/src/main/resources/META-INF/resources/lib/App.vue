<template>
  <v-layout
    id="todoApp"
    row>
    <v-flex>
      <v-card>
        <v-toolbar
          color="cyan"
          dark>
          <v-toolbar-side-icon/>
          <v-toolbar-title>To Do App</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <TodoList/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import TodoList from './components/TodoList.vue'

    export default {
        components: {
            TodoList
        }
    }
</script>

<style lang="scss">
    @import './variables.scss';

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #todoApp {
        max-width: 600px;
        line-height: 1.4;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $vue-blue;
    }

    h1 {
        text-align: center;
    }
</style>


<template>
  <v-layout row>
    <v-flex
      xs12
      sm6>
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

    #app {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.4;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $vue-blue;
    }

    h1 {
        text-align: center;
    }
</style>


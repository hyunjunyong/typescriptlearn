<template>
  <div id="app">
    <h1>vue todo with typescript</h1>
    <div>
      <todoInput :item="todoText" @input="updateTodoText()" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import todoInput from './components/todoInput.vue';
export default {
  name: 'name',
  components: { todoInput },
  data() {
    return {
      todoText: 'asdf',
    };
  },
  methods: {
    updateTodoText(value: any) {
      this.todoText = value;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

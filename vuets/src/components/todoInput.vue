<template>
  <div id="name">
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="handleInput()" />
    <button @click="addTodo()" type="button">add</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'name',
  props: {
    item: String,
  },
  data() {
    return {};
  },
  methods: {
    handleInput(event: any) {
      event.target.value;
      this.$emit('input', event.target.value);
    },
    addTodo() {
      console.log('add');
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="name">
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput()" />
    <button @click="addTodo()" type="button">추가</button>
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
      this.$emit('add');
    },
  },
};
</script>

<style lang="scss" scoped></style>

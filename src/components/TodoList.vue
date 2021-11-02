<script setup>
import TodoListItem from "./TodoListItem.vue"

const list = [
  { id: "1", text: "Ăn sáng", completed: true },
  { id: "2", text: "Ăn trưa", completed: false },
  { id: "3", text: "Ăn tối", completed: false },
]
</script>

<template>
  <div v-for:="{ id, text, completed } in list" class="list">
    <TodoListItem :id="id" :text="text" :completed="completed" />
  </div>
</template>

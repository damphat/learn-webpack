<script setup>
defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  completed: Boolean,
})
</script>

<template>
  <div class="item">
    <div>{{ id }}</div>
    <div class="expanded">{{ text }}</div>
    <div>{{ completed }}</div>
  </div>
</template>

<style>
.item {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: #ddd;
}
.item > div {
  padding: 8px;
  border: 1px solid white;
}
.expanded {
  flex-grow: 1;
}
</style>
>

<template>
  <div>
    <p class="test">vue test</p>

    <div
      class="bg-blue-500 p-4 font-bold hover:bg-blue-600 sm:text-red-500 lg:text-white"
    >
      {{ message }}
    </div>
    <div class="text-red-500">{{ counter }}</div>
    <button
      @click="incrementCounter"
      class="mr-2 cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
    >
      Increment Counter
    </button>
    <button
      @click="decrementCounter"
      class="cursor-pointer rounded bg-red-500 px-4 py-2 text-white"
    >
      Decrement Counter
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("Hello from Vue!");
console.log("Vue component loaded");
const counter = ref(0);

const incrementCounter = () => {
  console.log("Incrementing counter");
  counter.value++;
};
const decrementCounter = () => {
  console.log("Decrementing counter");
  counter.value--;
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>

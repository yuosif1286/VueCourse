<template>
  <div class="buttons">
    <button @click="storeCounter.incrementation()">+</button>
    <button @click="storeCounter.decremental()">-</button>
  </div>
</template>
<script setup>
import {useCounterStore} from "@/store/counter";
const storeCounter=useCounterStore();
</script>
<style scoped>
.content p {
  font-size: xxx-large;
}

.buttons button {
  font-size: xxx-large;
  font-weight: bolder;
}
</style>
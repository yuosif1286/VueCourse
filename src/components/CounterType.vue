<template>
  <div>
    This number is :
    <h2>{{storeCounter.oddOrEven}}</h2>
  </div>
</template>
<script setup lang="ts">
import {useCounterStore} from '@/store/counter'
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

div h2 {
  color: red;
}
</style>
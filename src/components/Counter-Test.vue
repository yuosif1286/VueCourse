<script lang="ts">
import {useCounterStore} from "@/store/counter"
import CounterAction from "@/components/CounterAction.vue";
import CounterType from "@/components/CounterType.vue";

export default {
  components: {CounterType, CounterAction},

  setup() {

    const storeCounter=useCounterStore()
   
    return {
     storeCounter
    }
  }
}

</script>

<template>
  <div class="content">
    <p>{{ storeCounter.count }}</p>
    <counterAction />
    <hr/>
    <CounterType />
    <hr/>
    <h3>Edit Counter :</h3>
    <input
    type="number"
    v-model="storeCounter.count"
    >
  </div>

</template>

<style scoped>
.content{
  margin: auto;
  margin-top: 20%;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
}
.content p{
  font-size: xxx-large;
}
.buttons button{
font-size: xxx-large;
  font-weight: bolder;
}
div h2{
  color: red;
}
</style>

<script lang="ts">
import {computed} from "vue";
import  { useCounterStore } from "@/store/counter"
export default {

  setup() {

    const counter=useCounterStore


    const increaseCount=function () {
     counter;
    }
    const dencreaseCount=function () {
     counter.value--;
    }

    const oddOrEven=computed(function () {
      if (counter.value % 2===0)
        return 'Even'
      else
        return 'odd'
    })

    return {
      counter,
      increaseCount,
      dencreaseCount,
      oddOrEven
    }
  }
}

</script>

<template>
  <div class="content">
    <p>{{ counter }}</p>
    <div class="buttons">
      <button @click="increaseCount">+</button>
      <button @click="dencreaseCount">-</button>
    </div>
    <hr/>
    <div>
      This number is :
      <h2>{{oddOrEven}}</h2>
    </div>
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

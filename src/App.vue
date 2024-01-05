<template>
  <section class="container">
    <h2>{{ user.uName }}</h2>
    <h2>{{ user.age }}</h2>
    <h2>{{oneParam}}</h2>
    <button @click="setNewAge">Change Age</button>
  </section>
</template>

<script setup>
//import {ref} from "vue";
import {ref,reactive} from "vue";


  const user= reactive({uName:'Maximilian',age:42});
  const oneParam=ref('soso');
  function setNewAge(){
    user.age=20;
    oneParam.value='yoyo';
  }
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
<template>
  <section class="container">
    <h2>{{ user.uName }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script setup>
//import {ref} from "vue";
import {ref,reactive,isRef,toRefs,isReactive} from "vue";

  const uName= ref('Maximilian');
  const user= reactive({uName:'Maximilian',age:42});
  setTimeout(function (){
   // uName.value='yoyo'
    user.uName='yoyo';
    user.age=32;
  },2000);
console.log(isReactive(user),isRef(uName));

const newUser=toRefs(user);
console.log(newUser);
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
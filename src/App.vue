<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h2>{{ user.age }}</h2>
    <h2>{{oneParam}}</h2>
    <button @click="setNewAge">Change Age</button>

    <input type="text" placeholder="write your first name" @input="setFirstName">
    <input type="text" placeholder="write your last name" @input="setLastName">
  </section>
</template>

<script setup>
//import {ref} from "vue";
import {ref,reactive,computed} from "vue";

   const firstName=ref('');
   const lasstName=ref('');

   const uName=computed(function (){
     return firstName.value + ' ' +lasstName.value;
   });

  const user= reactive({uName:'Maximilian',age:42});
  const oneParam=ref('soso');
  function setNewAge(){
    user.age=20;
    oneParam.value='yoyo';
  }

  function setFirstName(event){
    firstName.value=event.target.value;
  }
  function setLastName(event){
    lasstName.value=event.target.value;
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
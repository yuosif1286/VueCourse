<template>
  <UpBar/>
  <saidBar/>
  <section class="friends">
    <h2>My friends</h2>
    <ul>
       <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UpBar from './components/UpBar.vue';
import saidBar from './components/SaidBar.vue';


export default defineComponent({
  name: 'App',
  components: {
    UpBar,
    saidBar
  },
  data(){
    return {
      friends:[
        {
          id:1,
          name:'yoyo',
          phone:'0775235765',
          email:'yoyo@mn.com'
        },
        {
          id:2,
          name:'ali',
          phone:'0775235765',
          email:'ali@mn.com'
        },
      ]
    }
  }
})
</script>

<style>
</style>

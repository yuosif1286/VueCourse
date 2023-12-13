<template>
        <div class="sidebar">
        <div class="row">
               <a href="#">Home</a>
        </div>
         <div class="row">
               <a href="#">profil</a>
         </div>
         <div class="row">
             <a href="#">setting</a>
         </div>
        <div class="row">
               <a href="#">logout</a>
        </div>
         
        </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 
})
</script>

<style scoped>
  .sidebar {
      width: 111px;
      background-color: #531d746c;
      padding: 10px;
      display: flex;
      flex-direction: column;
      border: 2 3px #601d7430;
      height: 100vh;
    }
     a {
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
      color: #333333;
      font-size: larger;
      font-weight: bold;
    }
    a:hover{
        color: #0f1bc8;
    }
     .row{
        margin: 30px 20px 20px 27px;
    }
</style>
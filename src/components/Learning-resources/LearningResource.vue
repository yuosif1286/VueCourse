<template>
  <li>
    <base-card>
      <header>
        <h3>{{title}}</h3>
        <base-button
            :class="'flat'"
             @click="deleteResource(id)">
          <span class="text">Delete</span>
        </base-button>
      </header>
      <p>{{description}}</p>
    <nav>
      <a v-bind:href="link">View Resource</a>
    </nav>
    </base-card>
  </li>
</template>




<script>


import BaseButton from "@/UI/BaseButton.vue";

export default {
  components: {BaseButton},
  props:['id','title','description','link'],
  inject:['deleteResource']
}
</script>



<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li{
  margin: auto;
  max-width: 40rem;
}
a{
  text-decoration: none;
  color: orangered;
  font-size: large;
}
a:hover{
  color: #ff4500a3;
}
</style>
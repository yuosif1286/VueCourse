<template>
  <li>
    <div>
      <header>
        <h3>{{title}}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{description}}</p>
    <nav>
      <a v-bind:href="link">View Resource</a>
    </nav>
  </li>
</template>




<script>
export default {

  props:['title','description','link'],
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
</style>
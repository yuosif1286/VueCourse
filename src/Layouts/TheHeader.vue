
<template>
<header>
  <h1>
    {{title}}
  </h1>
</header>
</template>


<script  lang="ts">
export default {
  props:['title']
}
</script>
<style scoped>
header{
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: orangered;
}
h1{
  color: white;
  margin: 0;
}
</style>
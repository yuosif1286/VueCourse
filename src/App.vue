<template>
  <the-header title="RememberMe"></the-header>
  <TheResources></TheResources>
</template>

<script>
import TheHeader from "@/Layouts/TheHeader.vue";
import TheResources from "@/components/Learning-resources/TheResources.vue";

export default {
  components:{
    TheResources,
    TheHeader,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari&display=swap');
*{
  box-sizing: border-box;
}
html{
  font-family: 'Noto Sans Devanagari', sans-serif;
}
body{
  margin: 0;
}
</style>
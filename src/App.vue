<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "@/components/Learning-resources/StoredResources.vue";
import TheHeader from "@/Layouts/TheHeader.vue";

export default {
  components:{
    TheHeader,
    StoredResources,
  },
  data(){
    return{
      storedResources:[
        {
          id:'official-guides'
          ,title:'official Guide',
          description:'The official Vue.js documentation'
          ,link:'https://vuejs.org/guide/introduction.html'
        },
        {
          id:'google'
          ,title:'Google',
          description:'Learn to google...'
          ,link:'https://www.google.com/'
        }
      ]
    }
  }
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
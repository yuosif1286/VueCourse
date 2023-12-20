<template>
  <ul></ul>
</template>

<script>
export default {
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
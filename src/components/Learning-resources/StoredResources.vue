
<template>

  <ul>
    <learning-resource v-for="res in resources"  :description="res.description"
                       :title="res.title"
                       :link="res.link"
                       :id="res.id"
                       :key="res.id"
    ></learning-resource>
  </ul>

</template>








<script>
  import LearningResource from "./LearningResource.vue";
export default {
  inject:['resources'],
  components:{
  LearningResource
},
}
</script>
<style scoped>
ul{
list-style: none;
  margin: auto;
  padding: 0;
  max-width: 40rem;
}
</style>

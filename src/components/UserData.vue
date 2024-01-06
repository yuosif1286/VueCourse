
<template>
<h2>{{fullName}}</h2>
  <h2>{{age}}</h2>
</template>

<script >
import {computed} from "vue";

export default {
  props:['firstName','lastName','age'],
  setup(props){
    const fullName= computed()

    return{};
  },
};
</script>
<style scoped>

</style>
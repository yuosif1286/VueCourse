
<template>
<h2>{{fullName}}</h2>
  <h2>{{user.age}}</h2>
</template>

<script >
import {computed,inject} from "vue";

export default {
  props:['firstName','lastName'],
  setup(props){
    const fullName= computed(function (){
      return props.firstName +' '+ props.lastName;
    });
   const user=inject('user')
    return{fullName,user};
  },
};
</script>
<style scoped>

</style>
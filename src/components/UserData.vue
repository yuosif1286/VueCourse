
<template>
<h2>{{fullName}}</h2>
  <h2>{{user.age}}</h2>
</template>

<script >
import {
  computed,
  inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onUnmounted,
    onBeforeUnmount
} from "vue";

export default {
  props:['firstName','lastName'],
  setup(props){
    const fullName= computed(function (){
      return props.firstName +' '+ props.lastName;
    });
    onBeforeMount(function (){
      console.log('good friend');
    });
    onUpdated(function (){
      console.log('good friend');
    });
   const user=inject('user')
    return{fullName,user};
  },
};
</script>
<style scoped>

</style>
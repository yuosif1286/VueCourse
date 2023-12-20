<template>
  <h2>Manage Goals</h2>
  <input  type="text" ref="goal">
  <button @click="setGoal">set Goal</button>
  <error-alert v-if="inputIsInvalid">
    <h2>input is invalid!</h2>
    <p>please enter at least a few characters</p>
    <button @click="confirmError">Close</button>
  </error-alert>
</template>

<script lang="js">
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {ErrorAlert},
  data(){
    return{
      inputIsInvalid:false
    }
  },
  methods:{
    setGoal(){
      const enteredValue= this.$refs.goal.value;

      this.inputIsInvalid = enteredValue === '';
    },
    confirmError(){
      this.inputIsInvalid=false;
    }

  }
}
</script>
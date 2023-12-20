<template>
  <h2>Manage Goals</h2>
  <input  type="text" ref="goal">
  <button @click="setGoal">set Goal</button>
</template>

<script lang="js">
export default {
  methods:{
    setGoal(){
      const enteredValue= this.$refs.goal;

      if (enteredValue === '')
      {
        alert('input must not be empty');
      }

    }
  }
}
</script>
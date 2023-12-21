
<template>
<button :type="type" :class="mode">
  <slot></slot>
</button>
</template>
<script  lang="ts">
export default {
  props:['type','mode']
}
</script>

<style scoped>
button{
  background: inherit;
  border: none;
  font-size: large;
  color: darkmagenta;
  padding: 5px;
}
.flat{
  background: darkmagenta;
  border: none;
  font-size: large;
  color: white;
  padding: 5px;
}
.flat:hover,
.flat:active,
button{
  color: #d31020;
  background: #e160e1;
}
</style>
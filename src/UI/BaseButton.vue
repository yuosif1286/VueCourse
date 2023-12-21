
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
.flat{
  background: inherit;
  border: none;
  font-size: large;
  color: darkmagenta;
}
.flat:hover,
.flat:active{
  font-size: x-large;
  color: #8244a8;
  transform-style: preserve-3d;
  translate: 1px 1px;
}
</style>
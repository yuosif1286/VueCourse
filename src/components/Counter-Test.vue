<script lang="ts">
import {ref} from "vue";
export default {

  setup() {
    const counter = ref(10);

    return {
      counter,
    }
  }
}

</script>

<template>
  <div class="contaner">
    <p>{{ 10 }}</p>
  </div>

</template>

<style scoped>
div .contaner{
  text-align: center;
  display: flex;
 align-items: center;
  align-content: center;

}
</style>
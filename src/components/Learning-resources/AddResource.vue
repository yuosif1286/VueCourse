
<template>
<base-card>
  <form>
    <div class="form-control">
    <label for="title">Title</label>
    <input id="title"  name="title" type="text">
    </div>
    <div class="form-control">
      <label for="description" >Description</label>
      <textarea id="description" rows="3"  name="description" ></textarea>
    </div>
    <div class="form-control">
      <label for="link">Link</label>
      <input id="link"  name="link" type="url">
    </div>
    <div>
      <base-button type="submit">Add new</base-button>
    </div>
  </form>
</base-card>
</template>

<script setup lang="ts">

import BaseCard from "@/UI/BaseCard.vue";
import BaseButton from "@/UI/BaseButton.vue";
</script>

<style scoped>
.form-control{
  margin: 1rem 0;
}
input:focus,
textarea:focus{
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

input,
textarea{
  display: block;
  width: 100%;
  font:inherit;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
label{
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
</style>

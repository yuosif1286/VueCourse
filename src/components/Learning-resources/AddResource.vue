
<template>
<base-card>
  <form @submit.prevent="submitData">
    <div class="form-control">
    <label for="title">Title</label>
    <input id="title"  name="title" type="text" ref="titleIInput" >
    </div>
    <div class="form-control">
      <label for="description" >Description</label>
      <textarea id="description" rows="3"  name="description" ref="descriptionInput" ></textarea>
    </div>
    <div class="form-control">
      <label for="link">Link</label>
      <input id="link"  name="link" type="url" ref="linkInput">
    </div>
    <div>
      <base-button type="submit">Add new</base-button>
    </div>
  </form>
</base-card>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="ConfirmError">
    <template #default>
      <p>Unfortunately, at least one input value is invalid. </p>
      <p>please check your inputs and make sure you enter at least a few  characters into each input failed</p>
    </template>
    <template #action >
      <base-button @click="ConfirmError">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseDialog from "@/UI/BaseDialog.vue";
import BaseButton from "@/UI/BaseButton.vue";

export default {
  components: {BaseButton, BaseDialog},
  inject:['addResource'],
  data(){
    return{
      inputIsInvalid:false
    }
  },
  methods:{
   submitData(){
     const enteredTitle=this.$refs.titleIInput.value;
     const enteredDescription=this.$refs.titleIInput.value;
     const enteredUrl=this.$refs.linkInput.value;

     if (enteredTitle.trim() === '' || enteredDescription.trim() ==='' || enteredUrl === '')
     {
       this.inputIsInvalid=true;
       return;
     }
     this.addResource(enteredTitle,enteredDescription,enteredUrl);
   },
    ConfirmError(){
     this.inputIsInvalid=false;
    }
  }
}
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

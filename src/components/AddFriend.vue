<template>
<form class="form">
<div>
    <label for="name">name</label>
    <input type="text" v-model="friend.name">
</div>
<div>
    <label for="name">email</label>
    <input type="text" v-model="friend.email">
</div>
<div>
    <label for="phone">phone</label>
    <input type="text" v-model="friend.phone">
</div>
<div>
    <label for="checkbox">favoriate</label>
    <input type="checkbox" v-model="friend.isFav">
</div>
<button @click="addFriend">Add</button>
</form>
</template>

<script lang="ts">
import friend from '@/interface/friend';
import { defineComponent } from 'vue';
export default defineComponent({
data(){
    return{
        friend:{} as friend
    }
},
methods:{
    addFriend(){
      this.$emit('newFriend',this.friend);
       this.friend={} as friend;  
    }
}
});
</script>
<style scoped>
.form{
    margin-top: 30px;
    text-align: center;
}
div{
    margin-top: 20px;
}
button{
    margin-top: 20px;
}
</style>
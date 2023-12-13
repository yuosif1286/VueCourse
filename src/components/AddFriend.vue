<template>
<form>
<div>
    <label for="name">name</label>
    <input type="text" v-bind="friend.name">
</div>
<div>
    <label for="name">email</label>
    <input type="text" v-bind="friend.email">
</div>
<div>
    <label for="phone">phone</label>
    <input type="text" v-bind="friend.phone">
</div>
<div>
    <label for="checkbox">favoriate</label>
    <input type="checkbox" v-bind="friend.isFav">
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
        console.log(this.friend);
        
    }
}
});
</script>
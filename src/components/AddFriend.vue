<template>
    <form class="form" @submit.prevent="addFriend">
        <div>
            <label for="name">name</label>
            <input type="text" maxlength="10" minlength="2" required v-model="friend.name">
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
        <button>Add</button>
    </form>
</template>

<script lang="ts">
import friend from '@/interface/friend';
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            friend: {} as friend
        }
    },
    methods: {
        addFriend() {
            this.$emit('newFriend', this.friend);
            this.friend = {} as friend;
        }
    }
});
</script>
<style scoped>
.form {
    margin-top: 30px;
    text-align: center;
    width: 70%;
    border: .1875rem;
    border-radius: 3%;
    padding: 20px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
    /* Add shadow */
    border-top-left-radius: 10px;
    /* Add border-radius for top-left corner */
    border-top-right-radius: 10px;
    /* Add border-radius for top-right corner */
    border: 1px solid #555;
    /* Add border with your preferred color */

}

div {
    margin-top: 20px;
}

button {
    margin-top: 20px;
    background-color: rgb(235, 210, 97);
}

input {
    padding-left: 10px;
    margin-left: 10px;
}</style>
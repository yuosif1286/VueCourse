<template>
  <UpBar />
  <AddFriend @newFriend="(friend)=>addNewFriend(friend)"/>
  <ConditionalRindering type="0" />
  <div class="friends">
    <h2>My friends</h2>
    <div v-if="friends.length > 0">
      <ul v-for="(friend, index) in friends" :key="index">
        <FriendContact :friend="friend" @selectedFavoriate="(name) => messAlert(name)"
          @selectedFriend="(id) => removeFried(id)">
        </FriendContact>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UpBar from './components/UpBar.vue';
import FriendContact from './components/FriendContact.vue';
import ConditionalRindering from './components/ConditionalRindering.vue';
import AddFriend from './components/AddFriend.vue'
import friend from './interface/friend';

export default defineComponent({
  name: 'App',
  components: {
    UpBar,
    FriendContact,
    ConditionalRindering,
    AddFriend
  },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'yoyo',
          phone: '0775235765',
          email: 'yoyo',
          isFav: true
        },
        {
          id: 2,
          name: 'ali',
          phone: '0775235765',
          email: 'ali',
          isFav: false
        },
      ] as friend[]
    }
  },
  methods: {
    messAlert(name: string) {
      alert(`this is fav ${name}`);
    },
    removeFried(id: number) {
      // Find the index of the friend with the specified 'id'
      let indexToRemove = this.friends.findIndex(friend => friend.id === id);

      // If the friend with 'id' is found, remove it
      if (indexToRemove !== -1) {
        this.friends.splice(indexToRemove, 1);
      }
    },
    addNewFriend(newFriend: friend){
      this.friends.push(newFriend);
    }

  }
})
</script>

<style>
.friends {
  align-content: center;
  text-align: center;
}
</style>

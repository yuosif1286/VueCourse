<template>
  <main>
    <header>
      <UpBar />
    </header>
    <aside>
      <SaidBar />
    </aside>
    <section>

      <AddFriend @newFriend="(friend) => addNewFriend(friend)" />
      <ConditionalRindering type="0" />
      <div class="friends">
        <h2>My friends</h2>
        <div v-if="friends.length > 0">
          <ul v-for="(friend, index) in friends" :key="index">
            <FriendContact :name="friend.name" :is-fav="friend.isFav" :id="friend.id" :email="friend.email"
              :phone="friend.phone" @selectedFavoriate="(name) => messAlert(name)"
              @selectedFriend="(id) => removeFried(id)">
            </FriendContact>
          </ul>
        </div>

      </div>
    </section>
    <footer>
      ok
    </footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UpBar from './components/UpBar.vue';
import FriendContact from './components/FriendContact.vue';
import ConditionalRindering from './components/ConditionalRindering.vue';
import AddFriend from './components/AddFriend.vue'
import friend from './interface/friend';
import SaidBar from './components/SaidBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    UpBar,
    FriendContact,
    ConditionalRindering,
    AddFriend,
    SaidBar
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
     this.friends=this.friends.filter(f=>f.id !== id);
    },
    addNewFriend(newFriend: friend) {
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
header{
  grid-area: header;
}
aside{
  grid-area: aside;
}
section{
  grid-area: section;
}
footer{
  grid-area: footer;
   /* Add your preferred background color */
  color: #380808; /* Add your preferred text color */
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
main{
  display: grid;
  grid-template-areas: 'header header header'
                       'aside section section'
                       'aside footer footer';
}
</style>

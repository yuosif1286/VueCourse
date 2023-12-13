<template>
  <UpBar/>
  <ConditionalRindering type="0"/>
  <div class="friends">
    <h2>My friends</h2>
    <ul v-for="(friend,index) in friends" :key="index">
       <FriendContact
       :name="friend.name"
       :phone="friend.phone"
       :email="friend.email"
       :is-favorate="1"
       @selectedFavoriate="(name)=>messAlert(name)"
       >
       </FriendContact>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UpBar from './components/UpBar.vue';
import FriendContact from './components/FriendContact.vue';
import ConditionalRindering from './components/ConditionalRindering.vue';

export default defineComponent({
  name: 'App',
  components: {
    UpBar,
    FriendContact,
    ConditionalRindering
  },
  data(){
    return {
      friends:[
        {
          id:1,
          name:'yoyo',
          phone:'0775235765',
          email:'yoyo'
        },
        {
          id:2,
          name:'ali',
          phone:'0775235765',
          email:'ali'
        },
      ]
    }
  },
  methods:{
    messAlert(name : string){
      alert(`this is fav ${name}`);
    }

  }
})
</script>

<style>
.friends{
  align-content: center;
  text-align: center;
}
</style>

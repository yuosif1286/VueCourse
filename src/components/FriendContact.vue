<template>
  <li>
    <h2 :class="{ favoriate: friendIsFavoraite }">{{ friend.name }} <strong>{{ friendIsFavoraite ?
      '(favoraite)' : '' }}</strong></h2>
    <button @click="RemoveFriend">X</button>
    <button @click="toggleFavorite">{{ (friendIsFavoraite ? 'un' : 'is') }} Favoraite</button>
    <button @click="toggleDetails">{{ detailAreVisible ? 'hide' : 'show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li><strong>phone:</strong>{{ friend.phone }}</li>
      <li><strong>email:</strong>{{ emailFriend }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Friend from '@/interface/friend'

export default defineComponent({
  props:
  {
    friend:{type:  Friend,required:true}
  }
  ,
  data() {
    return {
      detailAreVisible: false,
      friendIsFavoraite: this.friend.isFav,
      emailFriend: this.friend.email,
      // friend:{
      //     name:'yoyo',
      //     phone:'07693043232',
      //     email:'wdwdqdwq@mn.com'
      // }  
    }
  },
  mounted() {
    this.emailFriend = this.emailFriend + '@gmail.com';
  },
  methods: {
    toggleDetails() { this.detailAreVisible = !this.detailAreVisible; },
    toggleFavorite() {
      if (this.friendIsFavoraite === true)
        this.friendIsFavoraite = false;
      else
        this.friendIsFavoraite = true;

      this.$emit('selectedFavoriate', this.friend.name);
    },
    RemoveFriend(){
    this.$emit('selectedFriend',this.friend.id);
  }
  },
  

})
</script>
<style scoped>.favoriate {
  color: red;
}</style>
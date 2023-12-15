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

    id: Number,
    name: {
      type: String,
      requierd: true
    },
    phone: {
      type: String,
      requierd: true
    }
    ,
    email: {
      type: String,
      requierd: false
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false
      ,
      validator: function (value) {
        return value === true || value === false
      }
    }
  },
  data() {
    return {
      detailAreVisible: false,
      friendIsFavoraite: this.isFav,
      emailFriend: this.email,
      friend: {
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFav: this.isFav
      } as Friend
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
    RemoveFriend() {
      this.$emit('selectedFriend', this.id);
    }
  },


})
</script>
<style scoped>
.favoriate {
  color: red;
}
</style>
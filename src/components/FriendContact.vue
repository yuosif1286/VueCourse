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
import Friend from '@/interface/friend';
import { defineComponent } from 'vue';


export default defineComponent({
 emits:['selectedFavoriate','selectedFriend'],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: '',
    },
    isFav: {
      type: Boolean,
      default: false,
      validator: (value: boolean) => value === true || value === false,
    },
  },
  data() {
    return {
      detailAreVisible: false,
      friendIsFavoraite: this.isFav,
      emailFriend: this.email,
      friend: {
        id: this.id,
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
  },
);
</script>
<style scoped>
.favoriate {
  color: red;
}
</style>
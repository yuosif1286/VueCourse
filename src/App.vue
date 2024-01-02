<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="AddOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth ></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavoriteValue from "@/components/FavoriteValue.vue";
import UserAuth from "@/components/UserAuth.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },

  methods:{
    AddOne(){
     // this.$indexStore.commit('increase',{value:10});
      this.$store.dispatch({
       type: 'increase',
        value: 10
      });
    }
  },
  computed:{
    ...mapGetters({
     isAuth: 'userIsAuth'
    }),
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
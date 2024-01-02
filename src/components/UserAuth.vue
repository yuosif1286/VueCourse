

<template>
<button @click="login" v-if="!isAuth">login</button>
<button @click="logout" v-if="isAuth">logout</button>
</template>
<script>
import {mapActions} from "vuex";

export  default {
  methods:{
/*    login(){
      this.$store.dispatch('login')
    }, logout(){
      this.$store.dispatch('logout')
    },*/
    ...mapActions(['login',"logout"])
  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuth;
    }
  }
};
</script>
<style scoped>

</style>
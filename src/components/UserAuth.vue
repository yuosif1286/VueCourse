

<template>
<button @click="login" v-if="!isAuth">login</button>
<button @click="logout" v-if="isAuth">logout</button>
  <p>{{isUserAuth}}</p>
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
    },
    isUserAuth(){
      return this.$store.getters.testAuth;
    }
  }
};
</script>
<style scoped>

</style>
<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="SaveChanges">Save Change</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return{
      changesSaved:false
    };
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      // navigation from code
      this.$router.push('/teams');
    },
    SaveChanges(){
      this.changesSaved=true;
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('usersList cmp beforeRouteEnter');
    console.log(to,from);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('usersList cmp  beforeLeave');
    console.log(to,from);
    if (!this.changesSaved){
     const userWantToLeave= confirm('Are you sure? you got unsaved changes!');
      next(userWantToLeave);
    }
    else
    next();
  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
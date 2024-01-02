

<template>
<button @click="inc"> add 2</button>
<button @click="increase({value : 20})"> add 20</button>
</template>
<script>
import {mapActions} from "vuex";

export default {
  methods:{
  /*  addOne(){
      this.$indexStore.dispatch('increment');
    }*/
    // ...mapActions(['increment','increase'])
    ...mapActions({
      inc:'increment',
      increase:'increase'
    })
  }
};
</script>
<style scoped>

</style>
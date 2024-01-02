
<template>
  <h3>{{ finalCount }}</h3>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
/*    counter(){
       return this.$indexStore.getters.finalCount;
    },*/
    ...mapGetters(['finalCount'])
  },
};
</script>
<style scoped>

</style>

<template>
  <h3>{{ normalCount }}</h3>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  computed:{
/*    counter(){
      return this.$indexStore.getters.normalCount;
    }*/
 ...mapGetters(['normalCount'])
  },
};
</script>

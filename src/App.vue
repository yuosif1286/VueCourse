<template>
  <UpBar/>
  <div class="friends">
    <h2>My friends</h2>
    <ul>
       <FriendContact
       name="yoyo"
       phone="09343432"
       email="wewew@gmail.com"
       >
       </FriendContact>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UpBar from './components/UpBar.vue';
import FriendContact from './components/FriendContact.vue';

export default defineComponent({
  name: 'App',
  components: {
    UpBar,
    FriendContact,
    
  },
  data(){
    return {
      friends:[
        {
          id:1,
          name:'yoyo',
          phone:'0775235765',
          email:'yoyo@mn.com'
        },
        {
          id:2,
          name:'ali',
          phone:'0775235765',
          email:'ali@mn.com'
        },
      ]
    }
  }
})
</script>

<style>
.friends{
  align-content: center;
  text-align: center;
}
</style>

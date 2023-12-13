<template>
    <li>
        <h2 :class="{favoriate : friendIsFavoraite === '1'}">{{name}} <strong>{{ friendIsFavoraite === '1'? '(favoraite)':''}}</strong></h2>
        <button @click="toggleFavorite">{{(friendIsFavoraite === '1' ? 'un' : 'is')}} Favoraite</button>
        <button @click="toggleDetails">{{detailAreVisible ? 'hide' : 'show'}} Details</button>
        <ul v-if="detailAreVisible">
            <li><strong>phone:</strong>{{phone }}</li>
            <li><strong>email:</strong>{{email }}</li>
        </ul>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:[
    'name',
    'phone',
    'email',
    'isFavorate'
  ],
  data(){
    return{
        detailAreVisible:false,
        friendIsFavoraite:this.isFavorate,
        // friend:{
        //     name:'yoyo',
        //     phone:'07693043232',
        //     email:'wdwdqdwq@mn.com'
        // }  
    }
  },
  methods:{
toggleDetails(){this.detailAreVisible=!this.detailAreVisible;},
toggleFavorite(){
  if (this.friendIsFavoraite === '1')
    this.friendIsFavoraite='0';
   else
     this.friendIsFavoraite='1';
}
}
  
})
</script>
<style scoped>
.favoriate{
  color: red;
}
</style>
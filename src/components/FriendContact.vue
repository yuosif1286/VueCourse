<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailAreVisible">
            <li><strong>phone:</strong>{{ friend.phone }}</li>
            <li><strong>email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
        detailAreVisible:false,
        friend:{
            name:'yoyo',
            phone:'07693043232',
            email:'wdwdqdwq@mn.com'
        }
    }
  },
  methods:{
toggleDetails(){this.detailAreVisible=!this.detailAreVisible;}
  }
})
</script>

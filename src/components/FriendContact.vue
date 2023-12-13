<template>
    <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails">{{detailAreVisible ? 'hide' : 'show'}} Details</button>
        <ul v-if="detailAreVisible">
            <li><strong>phone:</strong>{{phone }}</li>
            <li><strong>email:</strong>{{email }}</li>
        </ul>
    </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props:[
    'name',
    'phone',
    'email'
  ],
  data(){
    return{
        detailAreVisible:false,
        // friend:{
        //     name:'yoyo',
        //     phone:'07693043232',
        //     email:'wdwdqdwq@mn.com'
        // }  
    }
  },
  methods:{
toggleDetails(){this.detailAreVisible=!this.detailAreVisible;}
  }
})
</script>

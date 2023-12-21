
<template>
<base-card>
  <base-button
      :mode="storedResButton"
      @click="setSelectedTab('stored-resources')">
    Stored Resources
  </base-button>
  <base-button
      :mode="addResButton"
      @click="setSelectedTab('add-resource')">
    Add Resource
  </base-button>
</base-card>
<component :is="SelectTab"></component>
</template>

<script>
import StoredResources from "@/components/Learning-resources/StoredResources.vue";
import AddResource from "@/components/Learning-resources/AddResource.vue";
export default {
  components:{
    StoredResources,
    AddResource
  },
  data()
  {
    return{
      SelectTab:'stored-resources',
      storedResources:[
        {
          id:'official-guides'
          ,title:'official Guide',
          description:'The official Vue.js documentation'
          ,link:'https://vuejs.org/guide/introduction.html'
        },
        {
          id:'google'
          ,title:'Google',
          description:'Learn to google...'
          ,link:'https://www.google.com/'
        }
      ]
    }
  },
  provide(){
    return{
      resources:this.storedResources
    };
  },
  computed:{
    storedResButton: function () {
      return  'stored-resources' === this.SelectTab ? null : 'flat';
    },
    addResButton()
    {
      return  'add-resource' === this.SelectTab ? null : 'flat';
    }
  },
  methods:{
    setSelectedTab(tab){
      this.SelectTab=tab;
    },

  }
}
</script>

<style scoped>

</style>
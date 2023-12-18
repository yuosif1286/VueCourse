<template>
  <the-header></the-header>
  <div>
    <button @click="setSelectedComponent('active-goals')">active-goals</button>
    <button @click="setSelectedComponent('manage-goals')">manage-goals</button>
<!--    <active-goals v-if="selectedComponent === 'active-goals' "></active-goals>
    <manage-goals  v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
  <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  // local component
  components:{
TheHeader
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp)
    {
      this.selectedComponent=cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
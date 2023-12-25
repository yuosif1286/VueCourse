import { createApp } from 'vue';

import App from './App.vue';

import {createRouter,createWebHistory} from 'vue-router'
import teamsList from "@/components/teams/TeamsList.vue";
import usersList from "@/components/users/UsersList.vue";
const app = createApp(App)

 const router =createRouter({
     history: createWebHistory(),
     routes:[
         {path:'/teams',component:teamsList},
         {path:'/users',component:usersList},
     ],
     linkActiveClass:'active'
 });

app.use(router);
app.mount('#app');

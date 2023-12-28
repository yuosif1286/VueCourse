import { createApp } from 'vue';

import App from './App.vue';

import {createRouter,createWebHistory} from 'vue-router'
import teamsList from "@/components/teams/TeamsList.vue";
import usersList from "@/components/users/UsersList.vue";
import teamMembers from "@/components/teams/TeamMembers.vue";
import NotFound from "@/components/nav/NotFound.vue";
const app = createApp(App)

 const router =createRouter({
     history: createWebHistory(),
     routes:[
         // {path:'/',redirect:'/teams'},
         {path:'/teams',component:teamsList,alias:'/'},
         {path:'/users',component:usersList},
         {path:'/teams/:teamId',component:teamMembers,props:true},
         {path:'/:notfound(.*)',component:NotFound}
     ],
     linkActiveClass:'active'
 });

app.use(router);
app.mount('#app');

import { createApp } from 'vue';

import App from './App.vue';

import {createRouter,createWebHistory} from 'vue-router'
import teamsList from "@/components/teams/TeamsList.vue";
import usersList from "@/components/users/UsersList.vue";
import teamMembers from "@/components/teams/TeamMembers.vue";
import NotFound from "@/components/nav/NotFound.vue";
import teamFooter from "@/components/teams/TeamFooter.vue"
import userFooter from "@/components/users/UserFooter.vue"
const app = createApp(App)

 const router =createRouter({
     history: createWebHistory(),
     routes:[
         // {path:'/',redirect:'/teams'},
         {name:'teams' ,path:'/teams',
             components: {
             default:teamsList,
                 footer:teamFooter
             }
             ,alias:'/',
         children:[
             {name:'team-members', path:':teamId',component:teamMembers,props:true},// team/t1
         ]},
         {path:'/users',
             components:{
            default: usersList,footer:userFooter
             },
         beforeEnter(to,from,next){
             console.log('users beforEnter');
             console.log(to,from);
             next();
         }
         },
         {path:'/:notfound(.*)',component:NotFound}
     ],
     linkActiveClass:'active',
     scrollBehavior(_,_2,savedPostion){
      //   console.log(to,from,savedPostion);
         if (savedPostion)
         {
             return savedPostion;
         }
         return {left:0,top:0};
     }
 });

router.beforeEach(function (to,from,next) {
    console.log('Global beforeEach');
    console.log(to,from);
  //  next('/users');
  //   if(to.name === 'team-members')
  //       next();
  //   else
  //   next({name:'team-members',params:{teamId:'t2'}});
    //الغاء التنقل
   // next(false);
    next();
});
router.afterEach(function (to,from){
    console.log('Global AfterEach');
    console.log(to,from);
});
app.use(router);
app.mount('#app');

import { createApp } from 'vue';

import App from './App.vue';
import {createStore} from 'vuex';
interface State {
    counter: number;
    isLoggedIn:boolean;
}

const store=createStore({
    state: function () {
        return {
            counter: 0,
            isLoggedIn : false
        };
    },
    mutations:{
        increment(state: State){
            state.counter= 2 + state.counter;
        },
        increase(state,payload){
            state.counter+=payload.value;
        },
        setAuth(state ,payload)
        {
            state.isLoggedIn =payload.isAuth;
        }
    },
    actions:{
      increment(context){
          setTimeout(function (){
              context.commit('increment');
          },2000)
      },
        increase(context,payload){
            context.commit('increase',payload);
        },
        login(context){
          context.commit('setAuth',{isAuth:true})
        } ,
        logout(context){
          context.commit('setAuth',{isAuth:false})
        }
    },
    getters:{
        finalCount(state){
            return state.counter *3;
        },
        normalCount(_,getters){
            const finalCount=getters.finalCount;

            if (finalCount<0)
                return 0;
            if (finalCount>100)
                return 100;

            return finalCount;
        },
        userIsAuth(state){
            return state.isLoggedIn;
        }
    },
});

const app = createApp(App)
app.use(store);
app.mount('#app');

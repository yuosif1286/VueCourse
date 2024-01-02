import { createApp } from 'vue';

import App from './App.vue';
import {ActionContext, createStore, Store} from 'vuex';
interface StateCounter {
    counter: number;
}
interface State{
    isLoggedIn:boolean;
}
const CounterModule =  {
    namespace:true,
    actions: {
        increment(context: ActionContext<StateCounter, StateCounter>) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000)
        },
        increase(context: ActionContext<StateCounter, StateCounter>, payload: any) {
            context.commit('increase', payload);
        },
        login(){
            return true;
        }
    },
    getters: {
        finalCount(state: StateCounter) {
            return state.counter * 3;
        },
        normalCount(_: StateCounter, getters  : any) {
            const finalCount = getters.finalCount;

            if (finalCount < 0)
                return 0;
            if (finalCount > 100)
                return 100;

            return finalCount;
        },
        testAuth(state: StateCounter,getters:any,rootState:any,rootGetters:any):any{
            return rootState.isLoggedIn;
        },
    },
    mutations: {
        increment(state: StateCounter) {
            console.log(state);
            state.counter = 2 + state.counter;
        },
        increase(state: StateCounter, payload: any) {
            state.counter += payload.value;
        },
    },
    state() : StateCounter {
        return {
            counter: 0,
        };
    },
};
const AuthModule=
    {
        namespace: true,
    actions: {
        login(context:any) {
            context.commit('setAuth', {isAuth: true})
        },
        logout(context:any) {
            context.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
        userIsAuth(state :State) {
            return state.isLoggedIn;
        }
    },
    mutations:
        {
            setAuth(state:State, payload:any) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    state() {
        return {
            isLoggedIn: false
        };
},};
const store =createStore({
   modules:{
       numbers:CounterModule,
       auth:AuthModule
    },
});

const app = createApp(App)
app.use(store);
app.mount('#app');

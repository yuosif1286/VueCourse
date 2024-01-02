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
    actions: {
        increment(context: ActionContext<StateCounter, StateCounter>) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000)
        },
        increase(context: ActionContext<StateCounter, StateCounter>, payload: any) {
            context.commit('increase', payload);
        },
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
    },
    mutations: {
        increment(state: StateCounter) {
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
       Auth:AuthModule
    },
});

const app = createApp(App)
app.use(store);
app.mount('#app');

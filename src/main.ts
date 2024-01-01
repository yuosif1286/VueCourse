import { createApp } from 'vue';

import App from './App.vue';
import {createStore} from 'vuex';
interface State {
    counter: number;
}

const store=createStore({
    state(){
        return{
            counter:0,
        };
    },
    mutations:{
        increment(state : State){
            state.counter= 2 + state.counter;
        },
        increase(state,payload){
            state.counter+=payload.value;
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
        }
    },
});

const app = createApp(App)
app.use(store);
app.mount('#app');

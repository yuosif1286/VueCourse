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
        }
    }
});

const app = createApp(App)
app.use(store);
app.mount('#app');

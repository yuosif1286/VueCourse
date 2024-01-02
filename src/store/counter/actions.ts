import {ActionContext} from "vuex";
import StateCounter from "@/interFace/stateCounter";

  export  default {
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
}
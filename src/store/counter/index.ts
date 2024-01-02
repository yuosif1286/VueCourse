import {ActionContext} from "vuex";
import StateCounter from "@/interFace/stateCounter";
import rootActions from "@/store/counter/actions";
import rootGetters from "@/store/counter/getters";
import rootMutations from "@/store/counter/mutations";
export default {
    namespace:true,
    actions: rootActions,
    getters: rootGetters,
    mutations: rootMutations,
    state() : StateCounter {
        return {
            counter: 0,
        };
    },
};
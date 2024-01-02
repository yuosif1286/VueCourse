import State from "@/interFace/State";
import rootActions from "@/store/Auth/actions";
import rootGetters from "@/store/Auth/getters";
import rootMutations from "@/store/Auth/mutations";
export default {
    namespace: true,
        actions:rootActions ,
    getters: rootGetters,
    mutations:rootMutations,
    state() {
    return {
        isLoggedIn: false
    };
},};
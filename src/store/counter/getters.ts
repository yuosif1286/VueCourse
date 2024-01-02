import StateCounter from "@/interFace/stateCounter";

export default {
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
}
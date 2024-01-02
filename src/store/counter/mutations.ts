import StateCounter from "@/interFace/stateCounter";

export default {
    increment(state: StateCounter) {
        console.log(state);
        state.counter = 2 + state.counter;
    },
    increase(state: StateCounter, payload: any) {
        state.counter += payload.value;
    },
}
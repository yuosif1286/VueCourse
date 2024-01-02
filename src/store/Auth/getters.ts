import State from "@/interFace/State";

export default {
    userIsAuth(state :State) {
        return state.isLoggedIn;
    }
}
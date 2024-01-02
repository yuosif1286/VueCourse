import State from "@/interFace/State";

export default    {
    setAuth(state:State, payload:any) {
        state.isLoggedIn = payload.isAuth;
    }
}
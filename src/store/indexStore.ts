import rootCounter from "@/store/counter";
import Auth from "@/store/Auth";
import {createStore} from "vuex";

export default createStore({
modules:{
    numbers:rootCounter,
    auth:Auth
}});
import {createStore, Store} from "vuex";
import productModule from '@/store/Modules/product'
import CartModule from "@/store/Modules/cart";

const store :Store<IStateLogin>=createStore({
state(){
    return {
      isLoggedIn:false
    }
},
    modules:{
     prods:productModule,
     cart:CartModule
    },
    getters:{
        isAuthentication(state){
            return state.isLoggedIn;
        }
    },
    mutations:{
    Auth(state,payload){
        state.isLoggedIn=payload.isAuth;
    }
    },
    actions:{
    login(context){
        context.commit('Auth',{isAuth:true});
    },
        logout(context){
        context.commit('Auth',{isAuth:false});
        }
    }
});

export default store;

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

    }
});

export default store;

export default {
    namespaced:true,
    state(){
        return{
          items: [],
          total: 0,
          qty: 0 ,
        }
    },
    mutations:{
        addProductToCart(state:any,payload:any) {
            const productData=payload.product;
            const productInCartIndex = state.items.findIndex(
                (ci:any) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
               state.items.push(newItem);
            }
            state.qty++;
           state.total += productData.price;
        },

        removeProductFromCart(state:any,payload:any) {
            const prodId=payload.productId;
            const productInCartIndex = state.items.findIndex(
                (cartItem:any) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
           state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
           state.total -= prodData.price * prodData.qty;
        },
    },
    actions:{
        addToCart(context:any,payload:any) {
            context.commit('addProductToCart',payload);
            },
        removeFromCart(context:any,payload:any){
            context.commit('removeProductFromCart',payload);
        }
    },
    getters:{
        products(state:any){
            return state.product;
        },
        totalSum(state:any){
            return state.total;
        },
        quantity(state:any){
            return state.qty;
        }
    }
}
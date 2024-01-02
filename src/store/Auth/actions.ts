export default {
    login(context:any) {
        context.commit('setAuth', {isAuth: true})
    },
    logout(context:any) {
        context.commit('setAuth', {isAuth: false})
    }
}
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user: {
            name: 'Usuario Mock',
            email: 'mock@yahoo.com.br'
        }
    },
    mutations: {

    }
})
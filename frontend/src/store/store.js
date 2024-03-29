import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  plugins: [
    createPersistedState()
  ],
  state: {
    user: null,
    isUserLoggedIn: false,
    carts : [],
    totalCarts : 0,
    allProducts : [],
    totalWish : 0,
    wish: []
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      if(state.user != null)
        state.isUserLoggedIn = true;
      else
      {
        state.isUserLoggedIn = false;
        state.totalCarts = 0;
        state.carts = [];
      }
    },
    setCarts (state, carts) {
      state.carts = carts;
      state.totalCarts = 0;
      carts.forEach(element => {
        state.totalCarts+=eval(element.qty);
      });
    },
    setWish (state, wish) {
      state.wish.push(wish);
      state.totalWish = state.wish.length;
    },
    setAllProducts (state, products) {
      state.allProducts = products;
    },
    removeItemCarts(state, item){
      for( var i = state.carts.length; i--;){
        if ( state.carts[i] == item)
        {
          state.carts.splice(i, 1);
          state.totalCarts -= item.qty;
        }
        
      }
    },
    removeItemWish(state, item){
      for( var i = state.wish.length; i--;){
        if ( state.wish[i] == item)
        {
          state.wish.splice(i, 1);
          state.totalWish -= 1;
        }
        
      }
    },
    clearItemCarts (state) {
      state.carts = [];
      state.totalCarts = 0;
    },
  },
  actions: {
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setCarts ({commit}, carts) {
      commit('setCarts', carts)
    },
    removeItemCarts ({commit}, item) {
      commit('removeItemCarts', item)
    },
    clearItemCarts ({commit}) {
      commit('clearItemCarts')
    },
    setAllProducts ({commit}, products) {
      commit('setAllProducts', products)
    },
    addWish ({commit}, wish) {
      commit('setWish', wish)
    },
    removeItemWish ({commit}, item) {
      commit('removeItemWish', item)
    },
  }
})
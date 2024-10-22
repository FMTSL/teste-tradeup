// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    consultas: []
  },
  mutations: {
    adicionarConsulta(state, consulta) {
      state.consultas.push(consulta);
    }
  },
  actions: {
    adicionarConsulta({ commit }, consulta) {
      commit('adicionarConsulta', consulta);
    }
  },
  getters: {
    obterConsultas: state => state.consultas
  }
});

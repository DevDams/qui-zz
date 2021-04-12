import { createStore } from 'vuex'
import cat from './data/cat.json'
import humain from './data/humain.json'
import culture from './data/culture.json'
import mystere from './data/mystere.json'
import sante from './data/sante.json'

export default createStore({
  state: {
    catTheme: cat,
    humainTheme: humain,
    cultureTheme: culture,
    mystereTheme: mystere,
    santeTheme: sante 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

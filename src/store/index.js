import { createStore } from "vuex";
import shop from './shop'
import notes from './notes'

export const store = createStore({
  modules: {
    shop,
    notes
  }
})
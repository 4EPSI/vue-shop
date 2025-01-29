export default {
  state: {
    notes: [
      { title: 'First Note', desc: 'Description for first note', date: new Date(Date.now()).toLocaleString(), isEditingTitle: false, isEditingDesc: false },
      { title: 'Second Note', desc: 'Description for second note', date: new Date(Date.now()).toLocaleString(), isEditingTitle: false, isEditingDesc: false },
      { title: 'Third Note', desc: 'Description for third note', date: new Date(Date.now()).toLocaleString(), isEditingTitle: false, isEditingDesc: false }
    ],
    message: null,
    priority: 'Standard'
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note)
    },
    removeNote(state, note) {
      const index = state.notes.findIndex(n => 
        n.title === note.title &&
        n.desc === note.desc &&
        n.date === note.date &&
        n.priority === note.priority
      )

      if(index !== -1) {
        state.notes.splice(index, 1)
      }
    },
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    },
    updatePriority(state, priority) {
      state.priority = priority;
    }
  },
  actions: {
    addNote({ commit}, note) {
      commit('addNote', note)
    },
    removeNote({commit}, note) {
      commit('removeNote', note)
    },
    setMessage({commit}, message) {
      commit('setMessage', message)
    },
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    setPriority({ commit }, priority) {
      commit('updatePriority', priority);
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getMessage(state) {
      return state.message
    },
    getPriority: (state) => state.priority
  }
}

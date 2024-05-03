export const moduleA = {
  state: {
    dialogState: false,
  },

  getters: {
    getDialogState(state, value) {
      return state.dialogState;
    },
  },

  mutations: {
    toggleDialogState(state, value) {
      state.dialogState = !state.dialogState;
    },
  },
};

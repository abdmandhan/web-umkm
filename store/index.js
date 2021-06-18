// mutation types
const SET_ERROR = "m_error";
const SET_LOADING = "m_loading";

export const state = () => ({
  errors: {},
  loading: false,
})


export const actions = {
  startLoading(context) {
    context.commit(SET_LOADING, true);
  },
  finishLoading(context) {
    context.commit(SET_LOADING, false);
  },
}

export const mutations = {
  [SET_ERROR](state, data) {
    state.errors = data;
    console.log('setError', state.errors);
  },
  [SET_LOADING](state, data) {
    state.loading = data;
    console.log('setLoading', state.loading);
  },
}


import {FORM} from '../mutation-types';
// state
export const state = {
    form: {
        id: 'id',
        name: ''
    },
};

// mutations
export const mutations = {
    [FORM.SET_FORM](state, {type, value}) {
        state.form[type] = value;
    }
};

//getters
export const getters = {}

//actions
export const actions = {
    setForm({commit}, {type, value}) {
        console.log(type, value);
        commit(FORM.SET_FORM, {type, value});
    }
};

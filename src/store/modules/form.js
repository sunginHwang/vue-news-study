// state
export const state =  {
    form: {
        id: 'id',
        name: ''
    },
};

// mutations
export const mutations = {
    SET_FORM(state, {type, value}) {
        state.form[type] = value;
    }
};

//getters
export const getters = {}

//actions
export const actions = {
    setForm({commit}, {type, value}) {
        console.log(type, value);
        commit("SET_FORM",{type, value});
    }
};

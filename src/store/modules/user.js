import { fetchUserInfo } from "../../api";
// state
const state =  {
    user: {},
};

// mutations
const mutations = {
    SET_USER(state, data) {
        state.user = data;
    },
};

//getters
const getters = {
    fetchedUser(state) {
        return state.user;
    },
}
//actions
const actions = {
    async FETCH_USER({ commit }, userName){
        const res = await fetchUserInfo(userName);
        commit("SET_USER", res.data);
        return res;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

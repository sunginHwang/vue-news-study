import { fetchList } from "../../api/listAPI";
// state
const state =  {
    list: [],
};

// mutations
const mutations = {
    SET_LIST(state, data) {
        state.list = data;
    }
};

//getters
const getters = {}

//actions
const actions = {
    async FETCH_LIST({commit}, pageName){
        const res = await fetchList(pageName);
        commit("SET_LIST", res.data);
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

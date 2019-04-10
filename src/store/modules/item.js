import { fetchItemInfo } from "../../api";
// state
const state =  {
    item: {},
};

// mutations
const mutations = {
    SET_ITEM(state, data) {
        state.item = data;
    }
};

//getters
const getters = {
    fetchedItem(state) {
        return state.item;
    },
}
//actions
const actions = {
    async FETCH_ITEM({ commit }, itemId) {
        const res = await fetchItemInfo(itemId);
        commit("SET_ITEM", res.data);
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

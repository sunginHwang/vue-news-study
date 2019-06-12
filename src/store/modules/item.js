import {ITEM} from '../mutation-types';
import {fetchItemInfo} from "../../api/ItemAPI";
// state
export const state = {
    item: {},
};

// mutations
export const mutations = {
    [ITEM.SET_ITEM](state, data) {
        state.item = data;
    }
};

//getters
export const getters = {
    fetchedItem(state) {
        return state.item;
    },
};

//actions
export const actions = {
    async FETCH_ITEM({commit}, itemId) {
        const res = await fetchItemInfo(itemId);
        commit(ITEM.SET_ITEM, res.data);
        return res;
    },
};

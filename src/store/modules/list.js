import {LIST} from '../mutation-types';
import { fetchList } from "../../api/listAPI";
// state
export const state =  {
    list: [],
};

// mutations
export const mutations = {
    [LIST.SET_LIST](state, data) {
        state.list = data;
    }
};

//getters
export const getters = {}

//actions
export const actions = {
    async FETCH_LIST({commit}, pageName){
        const res = await fetchList(pageName);
        commit(LIST.SET_LIST, res.data);
        return res;
    },
};

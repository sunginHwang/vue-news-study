import { fetchUserInfo } from "../../api/userAPI";
// state
export const state =  {
    user: {},
};

// mutations
export const mutations = {
    SET_USER(state, data) {
        state.user = data;
    },
};

//getters
export const getters = {
    fetchedUser(state) {
        return state.user;
    },
}
//actions
export const actions = {
    async FETCH_USER({ commit }, userName){
        const res = await fetchUserInfo(userName);
        commit("SET_USER", res.data);
        return res;
    },
};

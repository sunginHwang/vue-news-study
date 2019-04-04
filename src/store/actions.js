import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api";

export default {
    async FETCH_LIST({commit}, pageName){
            const res = await fetchList(pageName);
            commit("SET_LIST", res.data);
            return res;
    },
    async FETCH_USER({ commit }, userName){
            const res = await fetchUserInfo(userName);
            commit("SET_USER", res.data);
            return res;
    },
    async FETCH_ITEM({ commit }, itemId) {
            const res = await fetchItemInfo(itemId);
            commit("SET_ITEM", res.data);
            return res;
    }
}
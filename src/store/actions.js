import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api";

export default {
    FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
                .then( response => {
                    commit("SET_LIST", response.data);
                    return response;
                })
                .catch(() => commit("SET_LIST", []));
    },
    FETCH_USER({ commit }, userName){
        return fetchUserInfo(userName)
                .then(response => {
                    commit("SET_USER", response.data);
                    return response
                })
                .catch(() => commit("SET_USER", {}));
    },
    FETCH_ITEM({ commit }, itemId) {
        return fetchItemInfo(itemId)
                .then(response => {
                    commit("SET_ITEM", response.data);
                    return response;
                })
                .catch(() => commit("SET_ITEM", {}));
    }
}
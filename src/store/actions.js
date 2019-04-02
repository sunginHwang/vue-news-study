import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList,
} from "../api";

export default {
    FETCH_LIST({commit}, pageName){
        fetchList(pageName)
            .then(({ data }) => commit("SET_LIST", data))
            .catch(() => commit("SET_LIST", []));
    },
    FETCH_USER({ commit }, userName){
        fetchUserInfo(userName)
            .then(({ data }) => commit("SET_USER", data))
            .catch(() => commit("SET_USER", {}));
    },
    FETCH_ITEM({ commit }, itemId) {
        fetchItemInfo(itemId)
          .then(({ data }) => commit("SET_ITEM", data))
          .catch(() => commit("SET_ITEM", {}));
    }
}
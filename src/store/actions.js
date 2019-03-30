import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo
} from "../api";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(({ data }) => commit("SET_NEWS", data))
            .catch(() => commit("SET_NEWS", []));
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => commit("SET_JOBS", data))
            .catch(() => commit("SET_JOBS", []));
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => commit("SET_ASK", data))
            .catch(() => commit("SET_ASK", []));
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
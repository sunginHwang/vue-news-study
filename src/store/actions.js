import { fetchNewsList, fetchAskList, fetchJobsList } from "../api";

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
    }
}
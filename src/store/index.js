import Vue from 'vue';
import Vuex from "vuex";
import item from './modules/item';
import user from './modules/user';
import list from './modules/list';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        item,
        user,
        list
    }
});
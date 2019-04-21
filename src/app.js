import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes';
import { createStore } from './store';
import ChartPlugin from "./plugins/ChartPlugin";
Vue.config.productionTip = false

Vue.use(ChartPlugin);


export function createApp () {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        // the root instance simply renders the App component.
        render: h => h(App),
    })
    return { app, router, store}
}


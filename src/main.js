import Vue from 'vue'
import App from './App.vue'
import {router} from '@/routes';
import ChartPlugin from "@/plugins/ChartPlugin";
import KeyCodePlugin from "@/plugins/KeyCodePlugin";
import {vueFilter} from '@/filter/dateFilter';
import {store} from './store';

Vue.config.productionTip = false;

vueFilter(Vue);
Vue.use(ChartPlugin);
Vue.use(KeyCodePlugin);

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')

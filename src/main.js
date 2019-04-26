import Vue from 'vue'
import App from './App.vue'
import { router } from './routes';
import ChartPlugin from "./plugins/ChartPlugin";
import KeyCodePlugin from "./plugins/KeyCodePlugin";

import { store } from './store';

Vue.config.productionTip = false;

Vue.use(ChartPlugin);
Vue.use(KeyCodePlugin);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

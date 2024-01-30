import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post, getFile } from '@/api/request.js';

import '@/plugins/element.js';
import '@/style/common.scss';

Vue.config.productionTip = false;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$getFile = getFile;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

import routes from './router/routes'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);


import 'element-ui/lib/theme-chalk/index.css'


const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouteMap from './routes'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// Plugin for http requests
Vue.use(VueResource);

// Plugin for page routing
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: RouteMap
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

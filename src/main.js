import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './routes'

Vue.config.productionTip = false

// Plugin for http requests
Vue.use(VueResource);

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

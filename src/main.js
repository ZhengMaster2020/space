import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import I18n from './lang'
import router from './routers'
import store from './stores'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  I18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

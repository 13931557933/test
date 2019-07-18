// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import store from './store'
import VueI18n from 'vue-i18n'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(ElementUI)
const messages = {
  zh: require('./assets/lang/cn'),
  en: require('./assets/lang/en')
}

const i18n = new VueI18n({
  locale:'zh',
  messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import headerInfo from './headerInfo.vue'

export const bus = new Vue();

Vue.config.productionTip = false
Vue.prototype.$http = axios
//глобальная регистрация компонентов
Vue.component('header-info',headerInfo);

new Vue({
  render: h => h(App),
}).$mount('#app')

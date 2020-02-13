import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import headerInfo from './headerInfo.vue'
import Сhangestyle from './directives/changestyle.js'


export const bus = new Vue();

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.filter('shortDate', function(str) {
	return str.substr(6);
});
Vue.filter('sizeTemp', function(str) {
	return str+" ℃";
});
Vue.filter('sizeHumidity', function(str) {
	return str+" %";
});
Vue.filter('sizePressure', function(str) {
	return str+" Па";
});
Vue.filter('sizeWind', function(str) {
	return str + " м/с";
});
//глобальная регистрация компонентов
Vue.component('header-info', headerInfo);
Vue.directive('changestyle', Сhangestyle);

new Vue({
  render: h => h(App),
}).$mount('#app')

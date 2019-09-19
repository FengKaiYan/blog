import Vue from 'vue'
import App from './App.vue'
// top 骄傲
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

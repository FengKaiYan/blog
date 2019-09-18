import Vue from 'vue'
import App from './App.vue'

// 备注
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

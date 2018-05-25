import Vue from 'vue'
import App from './App.vue'
import 'gapper-element-theme/lib/index.css'
import './assets/normal.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

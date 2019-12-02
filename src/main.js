import Vue from 'vue'
import App from './App.vue'
import ShardsVue from 'shards-vue'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(ShardsVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

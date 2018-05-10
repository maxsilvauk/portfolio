import Vue from 'vue'
import App from './App'
import Home from './components/home'

Vue.use(Home)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

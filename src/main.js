import Vue from 'vue'
import App from './App'
import Home from './components/home'

Vue.use(Home)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

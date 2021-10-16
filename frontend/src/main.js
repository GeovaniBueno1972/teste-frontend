import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import './config/bootstrap'

import './config/msgs'
import App from './App'
import store from './config/store'
import router from './config/router'


Vue.config.productionTip = false

// temporario
require('axios').defaults.headers.common['Authorization']= 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ikdlb3ZhbmkiLCJmdW5jYW8iOiJwcm9kdWNhbyIsImlhdCI6MTYzNDM0NTg4OSwiZXhwIjoxNjM0NjA1MDg5fQ.UaF9T4lZRGwBNl5qu7qYJukFyeoD4Fyn0LrVIUq26NI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
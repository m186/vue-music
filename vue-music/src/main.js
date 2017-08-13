import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
	loading: require('common/images/music.png')
})

/* eslint-disable no-new */
new Vue({
  	el: '#app',
	router,
	store,
  	render: h => h(App)
})

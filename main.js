import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import store from './store'
import util from './common/UtilsDate'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$util = util
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()

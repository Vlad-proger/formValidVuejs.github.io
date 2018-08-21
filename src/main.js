import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'	
import {routes} from './system/routes'	
import VeeValidate from 'vee-validate'

Vue.use(VueRouter)
Vue.use(VeeValidate)

export const router = new VueRouter({
	mode:'history',
	routes
}) 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

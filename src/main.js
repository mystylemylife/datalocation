import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'

import store from './vuex/store'
import App from './App.vue'
// import 'font-awesome/css/font-awesome.css'
import animate from 'animate.css'
import axios from 'axios'


// 全局的 axios 默认url前缀
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/596c5170a1d30433d834de7b/fengkong';

// 在vue原型中添加$http方法等于axios,所有组件都可以使用
Vue.prototype.$http = axios;

Vue.use(ElementUI)
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
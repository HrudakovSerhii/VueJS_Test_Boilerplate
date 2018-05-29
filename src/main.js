import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from 'Code/router/index'

new Vue({
    el: '#app-el',
    router,
    template: '<App/>',
    components: { App }
});
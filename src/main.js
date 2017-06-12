
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from 'Code/router/index'
import Header from 'Components/Header.vue'
import Footer from 'Components/Footer.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
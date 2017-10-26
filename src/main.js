// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';

import Vue from 'vue';
import Apps from './App.vue';
import router from 'Code/router/index';

new Vue({
	el: '#app-el',
	router: router,
	components: { Apps },
	template: '<Apps/>'
});

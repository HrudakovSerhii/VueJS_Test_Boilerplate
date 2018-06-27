import Vue from 'vue';
import Router from 'vue-router';

import Main from 'Components/Main.vue';
import About from 'Components/About.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/about',
			name: 'About',
			component: About
		}
	]
});

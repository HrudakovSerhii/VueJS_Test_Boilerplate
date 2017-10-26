import Vue from 'vue';
import Router from 'vue-router';

import Content from 'Components/Content.vue';
import About from 'Components/About.vue';

Vue.use(Router);

export default new Router({
  	routes: [
		{
			path: '/',
			name: 'Content',
			component: Content
		},
		{
			path: '/about',
			name: 'About',
			component: About
		}
  	]
});

import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'Components/Hello.vue';
import About from 'Components/pages/About.vue';

Vue.use(Router);

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'Hello',
	      	component: Hello
	    },
	    {
	    	path: '/about',
	    	name: 'About',
	    	component: About
	    }
  	]
});
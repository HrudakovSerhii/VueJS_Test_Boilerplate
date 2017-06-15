import Vue from 'vue';

Vue.component('super-t', {
	template: require('Templates/html_templates/template.html')
});

new Vue({
	el: 'app-message'
});

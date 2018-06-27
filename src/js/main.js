import Vue from 'vue';
import Apps from '../App.vue';
import router from './router/index';

new Vue({
    el: '#app-el',
    router: router,
    components: { Apps },
    template: '<Apps/>'
});

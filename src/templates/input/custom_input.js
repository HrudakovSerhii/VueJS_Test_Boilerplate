import Vue from 'vue'
import InputComponent from 'Templates/input/input.vue'

// const CUSTOM_INPUT = {
// 	'<div class="c-custom-input"><input class="ci-input-field"></input><textarea class="cd-text-out">HaHaHaHA</textarea></div>'
// }

new Vue({
    el: '#custom-input',
    template: <'InputComponent/>',
    components: { InputComponent }
});


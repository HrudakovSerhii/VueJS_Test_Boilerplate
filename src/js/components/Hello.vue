<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<output-field></output-field>
		<messages></messages>
	</div>
</template>

<script>
	import style from 'Styles/style.scss'

	import Vue from 'vue'

	import Output from 'Templates/input/output.vue'
	import Messages from 'Templates/input/message.vue'

	Vue.component('output-field', Output)
	Vue.component('messages', Messages)

	export default {
		name: 'hello',
		data: function() {
			return {
				greeting: 'Hello!'
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	h1 {
		color: white;
		font-size: 30px;
	}

	input-field {
		font-size: 30px;
		color: white;
	}
</style>
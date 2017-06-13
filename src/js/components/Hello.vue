<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<!-- <div id="custom-input"></div> -->
		<input-field></input-field>
	</div>
</template>

<script>
	import style from 'Styles/style.scss'

	import Vue from 'vue'

	import Input from 'Templates/input/input.vue'

	Vue.component('input-field', Input)

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
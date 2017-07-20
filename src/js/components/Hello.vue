<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<card></card>
	</div>
</template>

<script>
	import style from 'Styles/style.scss'

	import Vue from 'vue'

	import Card from 'Components/Card.vue'

	Vue.component('card', Card)

	export default {
		name: 'hello',
		data: function() {
			return {
				greeting: 'Hello!'
			};
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
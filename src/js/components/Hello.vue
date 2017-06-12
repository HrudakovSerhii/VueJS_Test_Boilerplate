<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
	</div>
</template>

<script>
	import style from 'Styles/style.scss';

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
</style>
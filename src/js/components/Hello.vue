<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<cardListView></cardListView>
	</div>
</template>

<script>
	import style from 'Styles/style.scss'

	import Vue from 'vue'

	import CardList from 'Components/CardList.vue'

	Vue.component('cardListView', CardList)

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
<style lang="scss">

	.hello {

	}

</style>
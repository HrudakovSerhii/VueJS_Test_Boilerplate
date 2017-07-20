<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<ul class="cards">
			<li class="cards__list" v-for="card in cardList">
				<cardView :cName="card.cardName" :cLabel="card.cardLabel"></cardView>
			</li>
		</ul>
	</div>
</template>

<script>
	import style from 'Styles/style.scss'

	import Vue from 'vue'

	import Card from 'Components/Card.vue'

	Vue.component('cardView', Card)

	let cardArray = [
		{ cardName: "one", cardLabel: "image 1" },
		{ cardName: "two", cardLabel: "image 2" },
		{ cardName: "three", cardLabel: "image 3" },
		{ cardName: "four", cardLabel: "image 4" },
		{ cardName: "five", cardLabel: "image 5" },
		{ cardName: "six", cardLabel: "image 6" }
	];

	export default {
		name: 'hello',
		data: function() {
			return {
				cardList: cardArray,
				greeting: 'Hello!'
			};
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

	.cards {
		.cards__list {
			display: inline-block;
		    position: relative;
		    width: 270px;
		    height: 410px;
		    margin: 10px;
		}
	}

</style>
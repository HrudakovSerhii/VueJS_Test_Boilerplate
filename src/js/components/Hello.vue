<template>
	<div class="hello">
		<h1> {{ greeting }}</h1>
		<button class="control-button" v-on:click="addCard">Add card</button>
		<button class="control-button" v-on:click="removeCard">Remove card</button>
        <transition-group name="list" tag="div" class="cards">
            <span v-for="card in cardList" v-bind:key="card" class="list-item">
                <cardView :cName="card.cardName" :cLabel="card.cardLabel"></cardView>
            </span>
        </transition-group>
		<!--<ul class="cards">-->
			<!--<li class="cards__list" v-for="card in cardList">-->
				<!--<cardView :cName="card.cardName" :cLabel="card.cardLabel"></cardView>-->
			<!--</li>-->
		<!--</ul>-->
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
		{ cardName: "three", cardLabel: "image 3" }
	];

	export default {
		name: 'hello',
		data: function() {
			return {
				cardList: cardArray,
				greeting: 'Hello!'
			};
		},
		methods: {
			addCard: function (e) {
				e.stopPropagation();
				var cardName = 'image ' + cardArray.length;
				var newEl = { cardName: cardArray.length, cardLabel: cardName };
				cardArray.push(newEl);
			},
			removeCard: function (e) {
				e.stopPropagation();

				cardArray.pop();
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

	.cards {
        /*background-color: aqua;*/
	}

    .list-item {
        display: inline-block;
        position: relative;
        width: 270px;
        height: 410px;
        margin: 10px;
        transition: all 1s;
    }

	.control-button {
		width: 200px;
		height: 100px;
	}

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        /*transform: translateY(300px);*/
    }

    .list-leave-active {
        position: absolute;
    }

</style>
<template>
	<div id="content">
		<start @addCard="addCard" @removeCard="removeCard"></start>
		<transition-group name="list" tag="div" class="cards">
			<span v-for="card in cardList" key="card" class="list-item">
				<cardView :cName="card.cardName" :cLabel="card.cardLabel"></cardView>
			</span>
		</transition-group>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Card from 'Components/Card.vue';
	import Start from 'SmartComponents/start';

	let cardArray = [
		{ cardName: "one", cardLabel: "image 1" },
		{ cardName: "two", cardLabel: "image 2" },
		{ cardName: "three", cardLabel: "image 3" }
	];

	Vue.component('cardView', Card);
	Vue.component('start', Start);

	export default {
		name: 'content',
		data: function() {
			return {
				cardList: cardArray,
				greeting: 'Hello!'
			};
		},
		created: function () {},
		methods: {
			addCard: function () {
				var cardName = 'image ' + cardArray.length;
				var newEl = { cardName: cardArray.length, cardLabel: cardName };
				cardArray.push(newEl);
			},
			removeCard: function () {
				cardArray.pop();
			}
		}
	};
</script>

<style lang="scss">

    .c-header {
        position: absolute;
        width: 100%;
        top: 0;

        .c-header-c {
            background-image: url('~Images/hz/header.png');
            background-size: contain;
            text-align: center;
            height: 50px;

            .c-header-content {
                text-align: center;

                .c-header-spacer {
                    visibility: hidden;
                    width: 30px;
                }

                .c-header-text {
                    display: inline-block;
                    line-height: 45px;
                    font-size: 140%;
                    vertical-align: middle;

                    @media( max-width:768px ) {
                        visibility: hidden;
                    }
                }

                .c-header-home-link {
                    display: none;

                    @media( max-width:768px ) {
                        display: inline-block;
                    }
                }
            }

            &.mobile-menu {
                height: 150px;

                .c-header-text {
                    display: block;
                    visibility: visible;
                }
            }
        }

        .c-header-mobile-btn {
            display: inline-block;
            position: absolute;
            width: 22px;
            height: 29px;
            background: url('~Images/burger.png');
            background-repeat: no-repeat;
            right: 20px;
            top: 14px;

            @media( min-width:769px ) {
                visibility: hidden;
                display: none;
            }
        }
    }

</style>

<template>
  <div class="card"
  	v-on:click="clickCard"
  	v-on:mouseover="moveCard"
  	v-on:mousemove="moveCard">

  	<div class="card__item" v-bind:style="{ 'webkitTransform': transform } ">
  		<img class="card__item-img" src="~Images/boat.jpg"/>
  		<div class="card__item-info">
  			<h1>This is beautifull card</h1>
  			<span class="card__item-type">Movie</span>
  		</div>
  		<span class="card__item-shadow"></span>
  		<svg class="card__item-border" xmlns="http://www.w3.org/2000/svg">
  			<rect height="100%" width="100%"></rect>
  		</svg>
  		<a class="card__item-link" href=""></a>
	</div>
  </div>
</template>

<script>
	import style from 'Styles/style.scss'
	import Vue from 'vue'

	export default {
		props: ['img_src'],
		name: 'card',
		data: function() {
			return {
				rX: '0deg',
				rY: '0deg',
				transform: ''
			}
		},
		methods: {
			moveCard: function(event) {
				// console.log(event.offsetX, event.offsetY, event);

				// Get offset x off mouse on top of el
				var mX = event.offsetX;
				var mY = event.offsetY;

				// Calculate % of image width
				var xP = event.srcElement.clientWidth / 100;
				var yP = event.srcElement.clientHeight / 100;

				// Get % coordinate of mouse
				var mpX = mX / xP;
				var mpY = mY / yP;

				// Calculate rotation values
				var rX = (mpX - 50) / 8;
				var rY = (50 - mpY) / 8;

				console.log(rX, rY);

				this.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
			},

			clickCard: function() {
				console.log('click');
			}
		},
		computed: {
			getTransform: function(rX, rY) {
				var styleString = "'transform':'rotateX(" + rX + ") rotateY(" + rY + ");'";
				console.log(styleString);
				return styleString;
			}
		}
		// data: function() {
		// 	console.log(this)
		// 	return {
		// 		img_src: 'this.$img_src'
		// 	}
		// }
	}

</script>

<style lang="scss">

	.card {
		position: relative;
	    float: left;
	    width: calc(33.3333333% - 12px);
	    height: 180px;
	    border-style: dashed;
	    border-width: 1px;
	    border-color: red;

		.card__item {
			width: 100%;
    		height: 100%;
			position: relative;
		    -webkit-transform-style: preserve-3d;
		    transform-style: preserve-3d;
		    will-change: transform;

		    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

		    .card__item-img {
				height: 100%;
		    }

			.card__item-info {
				position: absolute;
				display: none;
			    font-size: 14px;
			    color: white;
			    top: 50%;
			    user-select: none;
			    cursor: default;

				h1 {

				}
				.card__item-type {

				}
			}
			.card__item-shadow {
				background-image: linear-gradient(45deg, rgba(96, 58, 58, 0.8), transparent 40%);

			}
			.card__item-border {
				position: absolute;
    top: 20px;
    right: 20px;
    bottom: 20px;
    left: 20px;
    height: 372px;
    width: 230px;
    pointer-events: none;
    z-index: 3;
    -webkit-transform: translateZ(100px) scale(0.9);
    transform: translateZ(100px) scale(0.9);
				rect {
					fill: transparent;
    stroke: #fec3c3;
    stroke-width: 2px;
    stroke-dasharray: 0 1024;
    stroke-dashoffset: -602;
				}
			}
			.card__item-link {

			}
		}
	}

</style>

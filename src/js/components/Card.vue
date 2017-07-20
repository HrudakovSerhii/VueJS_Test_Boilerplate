<template>
  <div class="card"
  	v-on:click="clickCard"
  	v-on:mouseover="moveCard"
  	v-on:mousemove="moveCard"
  	v-on:mouseout="stopMoveCard">

  	<div class="card__item" v-bind:style="{ 'webkitTransform': transform } ">
  		<img class="card__item-img" src="~Images/butterfly.jpg"/>
  		<div class="card__item-info">
  			<h1>{{ cName }}</h1>
  			<span class="card__item-type">{{ cLabel }}</span>
  		</div>
  		<span class="card__item-shadow" v-bind:style="{ 'background': shadow } "></span>
  		<svg class="card__item-border" xmlns="http://www.w3.org/2000/svg">
  			<rect height="100%" width="100%" v-bind:style=""></rect>
  		</svg>
  		<a class="card__item-link" href=""></a>
	</div>
  </div>
</template>

<script>
	import style from 'Styles/style.scss'
	import Vue from 'vue'

	export default {
		data: function() {
			return {
				transform: '',
				shadow: ''
			}
		},
		props: ['cName', 'cLabel'],
		name: 'card',
		methods: {
			moveCard: function(event) {
				// Get % coordinate of mouse
				var mpX = event.offsetX / (event.srcElement.clientWidth / 100);
				var mpY = event.offsetY / (event.srcElement.clientHeight / 100);

				// Calculate rotation values (trick for work)
				var rX = (50 - mpY) / 8;
				var rY;

				if (mpX > 50) {
					rY =  mpX / 8 - 5;
				} else {
					rY = (mpX - 50) / 10;
				}

				var angle = 30 / 100 * mpX + 30;
				var transparent = (40 / 100) * mpY + 20;

				this.shadow = "linear-gradient(" + angle + "deg, #ffffff, transparent " + transparent + "%)";
				this.transform = "rotateX(" + rX + "deg) rotateY(" + rY + "deg)";
			},

			clickCard: function() {
				console.log('click');
			},

			stopMoveCard: function() {
				this.transform = "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg)";
				this.shadow = "linear-gradient(35deg, #ffffff, transparent 40%)";
			}
		},
		computed: {
			getShadow: function(rX, rY) {
				var angle = 30 / 100 * rX + 35;
				var transparent = 27 / 100 * rY + 25;
				var sString = "linear-gradient(" + angle + "deg, #ffffff, transparent " + transparent + "%)";

				return sString;
			}
		}
	}

</script>

<style lang="scss">

	.card {
		position: absolute;
	    width: 270px;
	    height: 410px;
	    float: left;

		.card__item {
			position: relative;
			height: 100%;
			transform-style: preserve-3d;
		    -webkit-transform-style: preserve-3d;
		    will-change: transform;
		    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

		    .card__item-img {
		    	display: block;
				height: 100%;
				width: 100%;
				min-height: 409px;
		    }

			.card__item-info {
				position: absolute;
			    right: 0;
			    bottom: 23px;
			    left: 0;
			    padding: 0 38px 24px;
			    pointer-events: none;
			    z-index: 2;
			    -webkit-transform: translateZ(100px) scale(0.9);
			    transform: translateZ(100px) scale(0.9);

				h1 {
					width: 80%;
				    color: white;
				    font-weight: 700;
				    font-size: 1.5625rem;
				    line-height: 3rem;
				    margin-bottom: .28124rem;
				    padding-top: .71876rem;
				    letter-spacing: .05em;
				    line-height: 1;
				    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
				}
				.card__item-type {
					display: block;
				    margin-bottom: 0;
				    color: white;
				    font-size: .5625rem;
				    font-weight: 900;
				    line-height: 1.5;
				    text-transform: uppercase;
				    letter-spacing: .2em;
				    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
				}
			}
			.card__item-shadow {
			    position: absolute;
			    width: 100%;
			    height: auto;
			    top: 0;
			    bottom: 0;
			    left: 0;
			    content: '';
			    z-index: 1;
			    -webkit-backface-visibility: hidden;
			    backface-visibility: hidden;
			    background-image: -webkit-linear-gradient(45deg, #ffffff, transparent 40%);
			    background-image: linear-gradient(45deg, #ffffff, transparent 40%);
			}

			.card__item-border {
				position: absolute;
				width: 250px;
				height: 392px;
			    top: 10px;
			    right: 10px;
			    bottom: 10px;
			    left: 10px;
			    pointer-events: none;
			    z-index: 3;
			    -webkit-transform: translateZ(100px) scale(0.9);
			    transform: translateZ(100px) scale(0.9);

				rect {
					fill: transparent;
				    stroke: white;
				    stroke-width: 2px;
				    stroke-dasharray: 0 1024;
				    stroke-dashoffset: -602;
				    -webkit-transition: stroke-dasharray 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),stroke-dashoffset 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				    transition: stroke-dasharray 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94),stroke-dashoffset 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				}
			}
			.card__item-link {
				display: block;
			    position: absolute;
			    top: 0;
			    right: 0;
			    bottom: 0;
			    color: black;
			    text-decoration: overline;
			    left: 0;
			    z-index: 10;
			}
		}

		&:hover {
	    	.card__item-border {
	    		rect {
	    			stroke-dasharray: 1362;
					stroke-dashoffset: 0;
				}
	    	}
	    }

	    &:after {
	    	position: absolute;
		    top: 100%;
		    left: 0;
		    z-index: -1;
		    display: block;
		    content: '';
		    height: 22px;
		    width: 100%;
		    background: url('~Images/floating-card-shadow.png') no-repeat;
		    background-size: 100%;
	    }
	}

</style>

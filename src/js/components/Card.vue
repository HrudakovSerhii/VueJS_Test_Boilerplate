<template>
  <div class="card"
  	v-on:click="clickCard"
  	v-on:mouseover="touchCard"
  	v-on:mousemove="touchCard"
  	v-on:mouseout="stopTouchCard">

	<div class="card__item" v-bind:style="cardItemStyle">
  		<img class="card__item-img" src="~Images/butterfly.jpg"/>
  		<transition name="fade">
	    	<span v-show="show_shadow" class="card__item-shadow" v-bind:style="itemShadowStyle"></span>
	  	</transition>
  		<svg class="card__item-border" xmlns="http://www.w3.org/2000/svg">
  			<rect height="100%" width="100%" v-bind:style=""></rect>
  		</svg>
  		<div class="card__item-info">
  			<h1>{{ cName }}</h1>
  			<span class="card__item-type">{{ cLabel }}</span>
  		</div>
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
				cardItemStyle: '',
				itemShadowStyle: '',
				rX: 0,
				rY: 0,
				angle: 0,
				transparent: 0,
				prevAngle: 0,
				prevTransparent: 0,
				animTimer: 0,
				show_shadow: true
			}
		},
		props: ['cName', 'cLabel'],
		name: 'card',
		methods: {
			clickCard: function() {
				// this.show_shadow = !this.show_shadow;
			},

			touchCard: function(event) {
				if (this.animTimer) {
					this.endAnimation();
				}

				// Get % coordinate of mouse
				var mpX = event.offsetX / (this.$el.clientWidth / 100);
				var mpY = event.offsetY / (this.$el.clientHeight / 100);

				// Calculate rotation values (trick for work)
				this.rX = (50 - mpY) / 10;

				if (mpX > 50) {
					this.rY =  mpX / 10 - 5;
				} else {
					this.rY = (mpX - 50) / 10;
				}

				this.angle = 30 / 100 * mpX + 30;
				this.transparent = (60 / 100) * mpY + 30;

				this.setUpAnimation(this.rX, this.rY, this.angle, this.transparent);
			},

			stopTouchCard: function(event) {
				event.stopPropagation();

				this.startAnimation();
			},

			startAnimation: function() {
				if (!this.animTimer) {
					this.initAnimation();
					this.processAnimation();
				} else {
					setTimeout(this.processAnimation, this.animTimer);
				}
			},

			initAnimation: function() {
				this.animTimer = 600;
				this.prevAngle = this.angle;
				this.prevTransparent = this.transparent;
			},

			processAnimation: function() {
				this.animTimer -= 100;

				this.rX = this.rX > 0 ? -Math.abs(this.rX - 1.2) : Math.abs(this.rX + 1.2);
				this.rY = this.rY > 0 ? -Math.abs(this.rY - 1.2) : Math.abs(this.rY + 1.2);

				this.angle = this.prevAngle > 45 ? this.angle - 5 : this.angle + 5;
				this.transparent = this.prevTransparent > 59 ? this.transparent - 7.5 : this.transparent + 7.5

				this.show_shadow = !this.show_shadow;

				this.setUpAnimation(this.rX, this.rY, this.angle, this.transparent);

				if (this.animTimer > 200) {
					this.startAnimation();
				} else {
					this.endAnimation();
				}
			},

			setUpAnimation: function(rX = 0, rY = 0, angle = 40, transparent = 30) {
				this.cardItemStyle = {
					'webkitTransform': "rotateX(" + rX + "deg) rotateY(" + rY + "deg)"
				};

				this.itemShadowStyle = {
					'background': "linear-gradient(" + angle + "deg, #ffffff, transparent " + transparent + "%)"
				};
			},

			endAnimation: function() {
				this.animTimer = 0;
				this.prevAngle = 0;
				this.prevTransparent = 0;
				this.show_shadow = true;

				this.setUpAnimation();
			},

			stopMoveCard: function(event) {
				if (this.animTimer === 200) {
					this.initAnimation();
					this.focusOutAnimation();
				} else {
					setTimeout(this.focusOutAnimation, this.animTimer);
				}
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

	    .fade-enter-active, .fade-leave-active {
	    	opacity: 0.80;
		  	transition: opacity .6s
		}

		.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		  	opacity: 0
		}

		.card__item {
			position: relative;
			height: 100%;
			transform-style: preserve-3d;
		    -webkit-transform-style: preserve-3d;
		    will-change: transform;
		    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

		    -webkit-transition: .8s ease-in-out;
		    -moz-transition: .8s ease-in-out;
		    -o-transition: .8s ease-in-out;
		    transition: .8s ease-in-out;

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

			    -webkit-transition: opacity 1s ease-in-out;
				-moz-transition: opacity 1s ease-in-out;
				-ms-transition: opacity 1s ease-in-out;
				-o-transition: opacity 1s ease-in-out;
				transition: opacity 1s ease-in-out;

			    background-image: -webkit-linear-gradient(45deg, #ffffff, transparent 30%);
			    background-image: linear-gradient(45deg, #ffffff, transparent 30%);
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
				    stroke-width: 4px;
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
			.card__item {
				transition: none;
				-webkit-transition: none;
			    -moz-transition: none;
			    -o-transition: color 0 ease-in;

			    .card__item-border {
		    		rect {
		    			stroke-dasharray: 1362;
						stroke-dashoffset: 0;
					}
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

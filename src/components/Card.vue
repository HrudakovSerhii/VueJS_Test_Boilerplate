<template>
	<div class="card"
		@click="clickCard"
		@mouseover="touchCard"
		@mousemove="touchCard"
		@mouseout="stopTouchCard">

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
		name: 'card',
		props: ['cName', 'cLabel'],
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
				animationTimer: 0,
				show_shadow: true
			}
		},
		methods: {
			clickCard: function(e) {
				e.stopPropagation();

				console.log(this.cLabel);
			},

			touchCard: function(event) {
				if (this.animationTimer) {
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
				if (!this.animationTimer) {
					this.initAnimation();
					this.processAnimation();
				} else {
					setTimeout(this.processAnimation, this.animationTimer);
				}
			},

			initAnimation: function() {
				this.animationTimer = 600;
				this.prevAngle = this.angle;
				this.prevTransparent = this.transparent;
			},

			processAnimation: function() {
				this.animationTimer -= 100;

				this.rX = this.rX > 0 ? -Math.abs(this.rX - 1.2) : Math.abs(this.rX + 1.2);
				this.rY = this.rY > 0 ? -Math.abs(this.rY - 1.2) : Math.abs(this.rY + 1.2);

				this.angle = this.prevAngle > 45 ? this.angle - 5 : this.angle + 5;
				this.transparent = this.prevTransparent > 59 ? this.transparent - 7.5 : this.transparent + 7.5

				this.show_shadow = !this.show_shadow;

				this.setUpAnimation(this.rX, this.rY, this.angle, this.transparent);

				if (this.animationTimer > 200) {
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
				this.animationTimer = 0;
				this.prevAngle = 0;
				this.prevTransparent = 0;
				this.show_shadow = true;

				this.setUpAnimation();
			}
		}
	};

</script>

<template>
  <div class="c-header">
  	<div class="c-header-c" v-bind:class="{ 'mobile-menu': isActive }">
		<div class="c-header-content">
			<a href="#/" class="c-header-text hz-black-text c-header-home-link">Home</a>
			<div class="c-header-text hz-black-text c-header-spacer"></div>
			<a class="c-header-text hz-black-text" href="#/about">About</a>
			<div class="c-header-text hz-black-text c-header-spacer"></div>
			<a class="c-header-text hz-black-text" href="#/">New</a>
    	</div>
	</div>
	<div class="c-header-mobile-btn" v-on:click="showHideMobileMenu">Menu</div>
  </div>
</template>

<script>
	export default {
		name: 'app-header',
		data: function () {
			return {
				isActive: false
			}
		},
		methods: {
			showHideMobileMenu: function () {
				console.log('click')
				this.isActive = !this.isActive;
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">

	.c-header {
		position: relative;
		width: 100%;
		top: 0;

		.c-header-c {
			background-color: darkgrey;
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
			background-color: white;
			line-height: 24px;
			right: 20px;
			top: 14px;

		    @media( min-width:769px ) {
				visibility: hidden;
				display: none;
			}
		}
	}

</style>

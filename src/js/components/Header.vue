<template>
  <div class="c-header">
  	<div class="c-header-c">
		<div class="c-header-content">
			<a href="#/" class="c-header-text hz-black-text c-header-home-link">Home</a>
			<div class="c-header-text hz-black-text c-header-spacer"></div>
			<a class="c-header-text hz-black-text" href="#/about">About</a>
			<div class="c-header-text hz-black-text c-header-spacer"></div>
			<a class="c-header-text hz-black-text" href="#/">New</a>
    	</div>
	</div>
	<div class="c-header-mobile-btn"></div>
  </div>
</template>

<script>
	import $ from 'jquery';

	export default {
	    name: 'app-header'
	}

	$(document).ready(function() {
		$('.c-header-mobile-btn').off();
		$('.c-header-mobile-btn').on('click', function(e){
			if ($('.c-header-c').hasClass('mobile-menu')){
				$('.c-header-c').removeClass('mobile-menu');
			} else {
				$('.c-header-c').addClass('mobile-menu');
			}

			e.preventDefault();
		});
	});
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

<template>
  <div class="c-header">
  	<div class="c-header-c">
		<div class="c-header-content">
			<a class="c-header-text hz-black-text" href="#/about">About</a>
			<div class="c-header-text hz-black-text c-header-spacer"></div>
			<a class="c-header-text hz-black-text" href="#/">New</a>
    	</div>
	</div>
	<div class="c-header-mobile-btn"></div>
  </div>
</template>

<style lang="scss">

	.c-header {
		position: absolute;
		width: 100%;

		.c-header-c {
			// background-image: url('../assets/hz/header.png');
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
					line-height: 50px;
					font-size: 180%;
					vertical-align: middle;

					@media( max-width:768px ) {
						visibility: hidden;
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
			// background: url(../assets/burger.png);
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

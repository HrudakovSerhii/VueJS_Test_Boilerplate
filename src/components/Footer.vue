
<template>
	<div class="c-footer">
		<div class="c-footer-c">
			<div class="c-footer-logo-container">
				<div class="c-footer-logo centered"></div>
			</div>
			<div class="c-footer-links-container">
				<ul class="c-footer-links">
					<li>
						<address class="footer-links-text">Copyright © 2017</address>
					</li>
					<li class="h-spacer">|</li>
					<li>
						<a class="footer-links-text" href="/#/about" target="_blank">About</a>
					</li>
					<li class="h-spacer">|</li>
					<li>
						<a class="footer-links-text" href="/privacy" target="_blank">Privacy</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss">

	@import "~Styles/base.scss";

	.c-footer {
		width: 100%;
		height: 51px;
		background-color: white;

		// Use this parameters for set footer always visible on a screen
		// bottom: 0;
		// position: fixed;

		// Use this parameter to hide footer after main-content size is less than minimus size that setted by main-content-block-height variable

		bottom: 0;
		position: relative;

		.c-footer-c {
			display: inline-block;
			width: 50%;

			.c-footer-links-container {
				width: 100%;

				.c-footer-links {
					list-style-type: none;
					line-height: 50px;

					li {
						display: inline-block;
					}
				}
			}
		}
	}

</style>

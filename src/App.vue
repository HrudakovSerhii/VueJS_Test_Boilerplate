<template>
	<div id="app">
		<app-header></app-header>
		<div class="main-content">
			<div class="main-content-row hc-c">
				<div class="main-content-container">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Vue from 'vue'
import Header from 'Components/Header.vue'
import Footer from 'Components/Footer.vue'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

export default {
	name: 'app'
}
</script>

<style scoped lang="scss">

	// @import "~Styles/main.scss";

</style>

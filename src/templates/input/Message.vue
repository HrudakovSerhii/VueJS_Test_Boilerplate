<template>
	<div id="app-message" class="app-m">
		<h1>{{ message }}</h1>
		<app-input :msg="message" @messageChange="message = $event"></app-input>
	</div>
</template>

<script>
	import Input from 'Templates/input/Input.vue'

	export default {
		data() {
			return {
				message: 'This is Message component file!'
			}
		},
		components: {
			'app-input': Input
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	h1 {
		color: Blue;
		font-size: 20px;
	}
</style>

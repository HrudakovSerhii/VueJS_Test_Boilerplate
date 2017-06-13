<template>
	<div class="app-message">
		<h1>{{ message }}</h1>
		<app-input :msg="message" @messageChange="message = $event"></app-input>
	</div>
</template>

<script>
	import Input from 'Templates/input/Input.vue';

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

<style lang="scss" scoped>
	.app-message, h1 {
		color: Blue;
		font-size: 30px;
	}
</style>
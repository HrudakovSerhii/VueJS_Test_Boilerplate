<template>
	<div id="app-message" class="app-m">
		<h1>{{ message }}</h1>
		<app-input :msg="message" @messageChange="message = $event"></app-input>
		<super-t></super-t>
	</div>
</template>

<script>
	import Input from 'Templates/input/Input.vue'
	import Template from 'Templates/html_templates/template'

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
	.app-m, h1 {
		color: Blue;
		font-size: 30px;
	}
</style>
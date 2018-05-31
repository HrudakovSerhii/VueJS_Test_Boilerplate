<template>
	<div id="output">
		This is new Output from another component!
		(from output.vue)
	</div>
</template>

<script>
	export default {
		name: 'output'
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	#output {
		color: Yellow;
		font-size: 30px;
	}
</style>
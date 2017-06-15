<template>
	<div id="input-f">
		<!-- <p>{{ msg }} (sended from parent component via props)</p>
		Type here to see data dinding: -->
		<input type="text" v-model="message"></input>
		<input type="text" :value='msg' @input="changeMessage">
		<h1> {{ message }}</h1>
	</div>
</template>

<script>
	export default {
		props: ['msg'],
		data() { //ES6 syntax
			return {
				message: ''
			}
		},
		methods: {
			changeMessage(event) {
				this.message = event.target.value;
				this.$emit('messageChange', this.message); // dispatching emit event to parent component
			}
		}
	}
</script>

<style lang="scss">
	#input-f {
		color: Black;
		font-size: 30px;

		p {
			padding: 0;
			margin: 0;
			color: orange;
		}

		h1 {
			color: white;
			text-size: 30px;
		}
	}
</style>
<script>
	export default {
		props: ['msg'],
		template: require('Templates/html/template.html'),
		data() {
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

<style scoped lang="scss" rel="stylesheet/scss">
	#input-f {
		color: Black;
		font-size: 30px;
        background-color: darkgrey;

		p {
			padding: 0;
			margin: 0;
			color: orange;
		}

		h1 {
			color: black;
			text-size: 30px;
		}
	}
</style>

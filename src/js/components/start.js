
export default {
	template: require('Templates/start.template.html'),
	data: function() {
		return {
			greeting: 'Hello!'
		};
	},
	created: function () {
		this.greating = "Yoyo";
	},
	methods: {
		addCard: function (e) {
			e.preventDefault();

			this.$emit('addCard');
		},
		removeCard: function (e) {
			e.stopPropagation();

			this.$emit('removeCard');
		}
	}
};

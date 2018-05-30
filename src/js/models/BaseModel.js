/**
 * Created by Serhiy on 29.05.18.
 */
export default
var Customer = module.exports = {
	attributes: [
		'id',
		'name',
		'email',
	],

	http: {
		baseRoute: '/api/customers/',
		actions: {
			// Don't expose the destroy action
			destroy: false
		}
	},

	methods: {
		sayHello() {
			alert('Hello ' + this.name);
		}
	},

	computed: {
		is_aaron: function () {
			return this.email === 'aarondfrancis@gmail.com'
		}
	}
}
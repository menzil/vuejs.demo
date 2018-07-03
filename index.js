Vue.component('color',{
	props: ['color'],
	template: '<li>{{color.content}}</li>'
})

var app = new Vue({
	el: '#app',
	methods: {
		logMessage(){
			console.log(this.message +"--"+ this.title);
		}
	},
	data: {
		message: 'hello vue!',
		button: 'log message',
		title: 'welcome to vue.js!',
		showMessage: true,
		colors: [
			{content: 'green'},
			{content: 'blue'},
			{content: 'red'}
		]
	}
})

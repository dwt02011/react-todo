var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Vigil'
				}, {
					id: 3,
					text: 'Orlando'
				}, {
					id: 4,
					text: 'Pulse'
				}
			]
		}
	},
	render: function () {
		var {todos} = this.state;

		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;
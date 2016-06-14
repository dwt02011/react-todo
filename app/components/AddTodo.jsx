var React = require('react');

var AddTodo = React.createClass({
	propTypes: {
		onAddTodo: React.PropTypes.func.isRequired
	},
	onSubmit: function (e) {
		e.preventDefault();
		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		} else {
			this.refs.todoText.focus();
		}
	},
	render: function () {
		return (
			<div className="container__footer">
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="Add a todo here!" ref="todoText"/>
					<button className="button expanded hollow">Add Todo</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;
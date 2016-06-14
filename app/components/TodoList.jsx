var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	propTypes: {
		onToggle: React.PropTypes.func.isRequired
	},
	render: function () {
		var {todos} = this.props;
		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;
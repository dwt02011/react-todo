var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	propTypes: {
		onToggle: React.PropTypes.func.isRequired
	},
	render: function () {
		var {id, text, completed, createdAt, completedAt} = this.props;
		var renderDate = () => {
			var message = 'Created ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}
			
			return message + moment.unix(timestamp).format('MMM Do, Y @ h:mm a');
		};
		return (
			<div onClick={() => {this.props.onToggle(id)}}>
				<input type="checkbox" checked={completed}/>
				<p>{text}</p>
				{renderDate()}
			</div>
		);
	}
});

module.exports = Todo;
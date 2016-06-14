var React = require('react');

var TodoSearch = React.createClass({
	propTypes: {
		onSearch: React.PropTypes.func.isRequired
	},
	onSearch: function () {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted,searchText);
	},
	render: function () {
		return (
			<div>
				<div>
					<input type="search" ref="search-text" placeholder="Search todos" onChange={this.onSearch}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="show-completed" onChange={this.onSearch}>
							Show completed todos
						</input>
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;
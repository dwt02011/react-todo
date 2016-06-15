var $ = require('jquery');

const KEY_TODOS = 'todos'

module.exports = {
	filterTodos: function (todos, showCompleted, searchText) {
		var filteredTodos = todos;

		// Filter by showComplteted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		// Filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			var text = todo.text.toLowerCase();
			return text.length === 0 || (text.indexOf(searchText) > -1);
		});

		// Sort todos with non-completed first
		filteredTodos.sort((a,b) => {
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;	
	}
};
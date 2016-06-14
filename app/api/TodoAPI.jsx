var $ = require('jquery');

const KEY_TODOS = 'todos'

module.exports = {
	setTodos: function (todos) {
		if ($.isArray(todos)) {
			localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem(KEY_TODOS);
		var todos;

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {
			return [];
		}

		return $.isArray(todos) ? todos : [];
	},
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
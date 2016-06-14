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
	}
};
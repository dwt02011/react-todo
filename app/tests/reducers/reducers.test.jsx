var expect = require('expect');
// verify that reducer methods don't modify inputs
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle show completed', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					text: 'Walk the dog',
					completed: false,
					createdAt: 12345
				}
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});

		var todos = [{
			id: '1',
			text: 'Incomplete todo',
			completed: false,
			createdAt: 12345,
			completedAt: null
		}, {
			id: '2',
			text: 'Completed todo',
			completed: true,
			createdAt: 12345,
			completedAt: 23456
		}];
		
		it('should update appropriate todo from incomplete to complete', () => {
			var updates = {
				completed: true,
				completedAt: 234567
			}
			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			}

			expect(todos[0].completed).toBe(false);
			expect(todos[0].completedAt).toBe(null);
			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toBe(true);
			expect(res[0].completedAt).toBeA('number');			
		});

		it('should update appropriate todo from complete to incomplete', () => {
			var updates = {
				completed: false,
				completedAt: null
			}
			var action = {
				type: 'UPDATE_TODO',
				id: todos[1].id,
				updates
			}

			expect(todos[1].completed).toBe(true);
			expect(todos[1].completedAt).toBeA('number');
			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[1].completed).toBe(false);
			expect(res[1].completedAt).toBe(null);			
		});

		it('should remove all todos from store', () => {
			var action = {
				type: 'LOGOUT'
			};
			var res = reducers.todosReducer(df(todos), df(action));

			expect(res.length).toBe(0);

		});

		it('should add existing todos', () => {
			var todos = [{
				id: '111',
				text: 'anything',
				completed: false,
				completedAt: undefined,
				createdAt: 3600
			}];
			var action = {
				type: 'ADD_TODOS',
				todos
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res).toEqual(todos);
		});
	});

	describe('authReducer', () => {
		it('should update auth uid on login', () => {
			var action = {
				type: 'LOGIN',
				uid: '26165'
			};
			var res = reducers.authReducer(df({}), df(action));

			expect(res.uid).toBe(action.uid);
		});

		it('should remove auth uid on logout', () => {
			var auth = {
				uid: '26165'
			};
			var action = {
				type: 'LOGOUT'
			};
			var res = reducers.authReducer(df(auth), df(action));

			expect(res).toNotIncludeKey('uid');
		});
	});
});
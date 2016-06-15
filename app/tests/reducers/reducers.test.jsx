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
				text: 'Walk the dog'
			};

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].id).toBeA('string');
			expect(res[0].text).toEqual(action.text);
		});

		var todos = [{
			id: '1',
			text: 'Incomplete todo',
			completed: false,
			createdAt: 12345,
			completedAt: undefined
		}, {
			id: '2',
			text: 'Completed todo',
			completed: true,
			createdAt: 12345,
			completedAt: 23456
		}];
		
		it('should toggle appropriate todo from incomplete to complete', () => {
			var action = {
				type: 'TOGGLE_TODO',
				id: '1'
			}

			expect(todos[0].completed).toBe(false);
			expect(todos[0].completedAt).toBe(undefined);
			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toBe(true);
			expect(res[0].completedAt).toBeA('number');			
		});

		it('should toggle appropriate todo from incomplete to complete', () => {
			var action = {
				type: 'TOGGLE_TODO',
				id: '2'
			}

			expect(todos[1].completed).toBe(true);
			expect(todos[1].completedAt).toBeA('number');
			var res = reducers.todosReducer(df(todos), df(action));
			expect(res[1].completed).toBe(false);
			expect(res[1].completedAt).toBe(undefined);			
		});
	});
});
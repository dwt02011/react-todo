var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {AddTodo} from 'AddTodo';
import * as actions from 'actions';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should not dispatch ADD_TODO if empty todo text entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		var text = '';
		addTodo.refs.todoText.value = text;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
	
	it('should dispatch ADD_TODO when valid input text', () => {
		var text = 'this is some text';
		var action = actions.startAddTodo(text);

		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = text;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(addTodo.refs.todoText.value).toBe('');
		expect(spy).toHaveBeenCalledWith(action);
	});
});
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should not call onAddTodo if empty todo text entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		var text = '';
		addTodo.refs.todoText.value = text;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
	
	it('should call onAddTodo if valid todo entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		var text = 'this is some text';
		addTodo.refs.todoText.value = text;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(addTodo.refs.todoText.value).toBe('');
		expect(spy).toHaveBeenCalledWith(text);
	});
});
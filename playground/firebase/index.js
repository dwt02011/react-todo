import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: 'AIzaSyBRoXnDD3Lz41uxTxuItJeqEp6oIlkBSrU',
	authDomain: 'todo-app-76dc0.firebaseapp.com',
	databaseURL: 'https://todo-app-76dc0.firebaseio.com',
	storageBucket: 'todo-app-76dc0.appspot.com'
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0'
	},
	isRunning: true,
	user: {
		name: 'Daniel',
		age: 23
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
	console.log('Todo changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
	console.log('Todo changed', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Todo #1'
});

todosRef.push({
	text: 'Todo #2'
});
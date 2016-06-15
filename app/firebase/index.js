import firebase from 'firebase';

try {
	// Initialize Firebase
	var config = {
		apiKey: 'AIzaSyBRoXnDD3Lz41uxTxuItJeqEp6oIlkBSrU',
		authDomain: 'todo-app-76dc0.firebaseapp.com',
		databaseURL: 'https://todo-app-76dc0.firebaseio.com',
		storageBucket: 'todo-app-76dc0.appspot.com'
	};

	firebase.initializeApp(config);
} catch (e) {
	console.log('error connecting to firebase');
}

export var firebaseRef = firebase.database().ref();
export default firebase;
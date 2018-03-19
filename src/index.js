import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// integrar firebase
firebase.initializeApp({
	apiKey: "AIzaSyCUSlq0rwb3-_aHXzzAUxcytFM0JhJaQMg",
  authDomain: "instareact-ec285.firebaseapp.com",
  databaseURL: "https://instareact-ec285.firebaseio.com",
  projectId: "instareact-ec285",
  storageBucket: "instareact-ec285.appspot.com",
  messagingSenderId: "383468909494"	
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import Startup from './components/startup';

const firebaseConfig = {
  apiKey: "AIzaSyASDAEXn4h__a5ooWYWHvsbvxkrsCeqQRY",
  authDomain: "kulukirjanpito-updated.firebaseapp.com",
  projectId: "kulukirjanpito-updated",
  storageBucket: "kulukirjanpito-updated.appspot.com",
  messagingSenderId: "910067511215",
  appId: "1:910067511215:web:40d5236501f291b767895a",
  measurementId: "G-XTJJC1SBL0"
};

ReactDOM.render(
  <React.StrictMode>
     <FirebaseAppProvider firebaseConfig={firebaseConfig}>
       <AuthCheck fallback={<Startup />}>
        <App />
       </AuthCheck>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

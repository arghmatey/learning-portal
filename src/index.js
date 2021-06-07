import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './fonts/AvenirNext-Regular.ttf';
// import './fonts/AvenirNext-Medium.ttf';
// import './fonts/AvenirNext-Bold.ttf';

ReactDOM.render(
  <Router><Route render={({ history }) => <App history={history} />} /> </Router>,
  document.getElementById('root')
);

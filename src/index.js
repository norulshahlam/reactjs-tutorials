import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './l1-rendering-using-jsx/App';
// import App from './l2-conditions/App';
// import App from './l3-event-handler-using-state/App';
// import App from './l4-update-state-array/App';
// import App from './l5-select-random-list/App';
// import App from './l6-toggle-hide-show/App';
// import App from './l12-understanding-state/App';
// import App from './l9-react-router/App';
// import App from './l10-router/App';
import App from './l2-ConditionalRend/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

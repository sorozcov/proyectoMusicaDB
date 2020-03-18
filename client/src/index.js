import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);

const getCityList = () => {
  fetch('/api/artist',{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    
    var artistList = res.map(r => r.name);
    console.log(artistList);
  });
};
console.log("hey");
getCityList();

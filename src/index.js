import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';
import { Provider, connect } from 'react-redux'
import store from './store'
import mapDispatchToProps from './actions/mapDispatchToProps'
import mapStateToProps from './store/mapStateToProps'

import registerServiceWorker from './registerServiceWorker';

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp  />
  </Provider>
  , 
  document.getElementById('root')
);

registerServiceWorker();

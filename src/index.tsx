import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <App />
    </Provider>
    , document.querySelector('#root')
)
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {Provider} from 'react-redux'

import reducers from './redux/reducers'
import App from './componentes/App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Rock+Salt|Cinzel');
    body{
        margin:0;
    }
`

const store = createStore(reducers,{},applyMiddleware(promise(),reduxThunk,logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
   , 
    document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'reset-css';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import App from './App';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById("root")
);

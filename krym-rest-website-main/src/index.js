import React from 'react'
import App from './app';
import {createRoot} from "react-dom";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools())

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
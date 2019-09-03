import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './index.css';
import Login from '../src/component/Login';
import Register from '../src/component/Register';
// import * as serviceWorker from './serviceWorker';

const Root = (
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register/" component={Register}/>
        <Redirect from="/" to="/login" />
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

// serviceWorker.unregister();

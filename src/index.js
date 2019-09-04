import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import ForgetPassword from './component/ForgetPassword';
import Home from './component/Home';
// import * as serviceWorker from './serviceWorker';

const Root = (
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register/" component={Register}/>
        <Route path="/forgetpassword/" component={ForgetPassword}/>
        <Route path="/home/" component={Home}/>
        <Redirect from="/" to="/login" />
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

// serviceWorker.unregister();

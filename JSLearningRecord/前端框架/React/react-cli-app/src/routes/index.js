import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from '../App';
import Home from '../pages/Home';
import ToDoList from '../pages/ToDoList';

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to='/home'/>
        <Route path="/home" component={Home} />
        <Route path="/todolist" component={ToDoList} />
    </Route>
)
export default routes
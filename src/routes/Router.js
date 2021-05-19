import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../view/Home';
import Login from '../view/Login';
import Join from '../view/Join';
import ImageUpload from '../view/ImageUpload';
import ImageEdit from '../view/ImageEdit';
import Header from '../components/Header';
const Routers = () => (
    <Router basename={"/"}>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/image-upload" component={ImageUpload} />
            <Route path="/image-edit" component={ImageEdit} />
            <Redirect from="*" to="/"/>
        </Switch>

    </Router>
)

export default Routers;
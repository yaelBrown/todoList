import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "../views/home"
import Login from "../views/login"
import Todo from "../views/todo"

export default class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/todo" exact component={Todo}/>
                </Switch>
            </div>
        )
    }
}

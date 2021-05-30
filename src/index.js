import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-unresolved
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// core components
import User from './layouts/Dashboard'
import Frontend from './layouts/Frontend'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Frontend} />
            <Route path="/user" component={User} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

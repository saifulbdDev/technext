/* eslint-disable import/named */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { PostProvider } from './Context/postContext'
import { UserPostProvider } from './Context/userpostContext'
import Home from './pages/Home'
import Profile from './pages/users/Post'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/">
                    <PostProvider>
                        <Home />
                    </PostProvider>
                </Route>
                <Route exact path="/profile">
                    <UserPostProvider>
                        <Profile />
                    </UserPostProvider>
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App

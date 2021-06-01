/* eslint-disable import/named */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { PostProvider } from './Context/postContext'
import { UserPostProvider, UserPostsProvider } from './Context/userpostContext'
import Home from './pages/Home'
import Post from './pages/users/Post'
import OwnPostUpdate from './pages/users/Postupdate'
import Profile from './pages/users/PostList'

function App() {
    return (
        <main className="wrapper">
            <Header />

            <Switch>
                <Route exact path="/">
                    <PostProvider>
                        <Home />
                    </PostProvider>
                </Route>
                <Route exact path="/profile">
                    <UserPostsProvider>
                        <Profile />
                    </UserPostsProvider>
                </Route>
                <Route exact path="/own-post/:id">
                    <UserPostProvider>
                        <Post />
                    </UserPostProvider>
                </Route>
                <Route exact path="/own-post/update/:id">
                    <UserPostProvider>
                        <OwnPostUpdate />
                    </UserPostProvider>
                </Route>
            </Switch>
            <Footer />
        </main>
    )
}

export default App

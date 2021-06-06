/* eslint-disable import/named */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { PostProvider } from './Context/postContext'
import { UserPostProvider, UserPostsProvider } from './Context/userpostContext'
import { UsersProvider } from './Context/usersContext'
import Home from './pages/Home'
import Post from './pages/users/Post'
import OwnPostUpdate from './pages/users/Postupdate'
import Profile from './pages/users/Profile'
import UserList from './pages/users/UsersList'

function App() {
    return (
        <div>
            <Header />
            <main className="wrapper">
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
                    <Route exact path="/user-list">
                        <UsersProvider>
                            <UserList />
                        </UsersProvider>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App

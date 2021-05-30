import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import PostList from '../pages/PostList'

function App() {
    return (
        <Router>
            <main className="main">
                <Header />
                <Route path="/" component={PostList} />
            </main>
        </Router>
    )
}

export default App

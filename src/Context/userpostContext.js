import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";

const UserPosts = React.createContext()
const UserPost = React.createContext()

function UserPostsProvider({ children }) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchArticles()
    }, [])

    async function fetchArticles() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=2')
            setArticles(content.data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return <UserPosts.Provider value={{ articles }}>{children}</UserPosts.Provider>
}
function UserPostProvider({ children }) {
    const [articless, setArticles] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchArticles()
    }, [])

    async function fetchArticles() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=2')
            setArticles(content.data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return <UserPost.Provider value={{ articless }}>{children}</UserPost.Provider>
}

export { UserPostsProvider, UserPosts, UserPostProvider, UserPost }

import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";

const Post = React.createContext()

function PostProvider({ children }) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchArticles()
    }, [])

    async function fetchArticles() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setArticles(content.data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return <Post.Provider value={{ articles }}>{children}</Post.Provider>
}

export { PostProvider, Post }

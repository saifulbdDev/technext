import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const Context = createContext()

function ContextProvider({ children }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchPosts()
    }, [])

    async function fetchPosts() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(content.data)
            localStorage.setItem('posts', JSON.stringify(content.data))
        } catch (error) {
            console.log(error)
        }
    }
    console.log(posts)
    return <Context.Provider value={{ posts }}>{children}</Context.Provider>
}
export { ContextProvider, Context }
// eslint-disable-next-line prettier/prettier


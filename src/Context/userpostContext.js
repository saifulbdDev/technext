/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";
import { useParams } from 'react-router-dom'

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
    const [article, setArticle] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])
    const [userId, setUserId] = useState([])

    const { id } = useParams()
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchArticle()
    }, [])

    async function fetchArticle() {
        try {
            const content = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setArticle(content.data)
            setTitle(content.data.title)
            setBody(content.data.body)
            setUserId(content.data.userId)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }
    async function articleUpdate() {
        console.log(id)

        try {
            const content = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                body: JSON.stringify({
                    id,
                    title,
                    body,
                    userId,
                }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserPost.Provider value={{ article, title, setTitle, body, setBody, articleUpdate }}>
            {children}
        </UserPost.Provider>
    )
}

export { UserPostsProvider, UserPosts, UserPostProvider, UserPost }

/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-empty */
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
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])
    const [status, setStatus] = useState([])
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
    async function Addarticle() {
        await axios
            .post('https://jsonplaceholder.typicode.com/posts', {
                body: JSON.stringify({
                    title,
                    body,
                    userId: 2,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (response.status !== 201) {
                } else {
                    const arry = articles
                    const { id } = response.data
                    arry.push({ userId: 2, id, title, body })
                    setStatus(arry)
                }
            })

            .catch((error) => console.log(error))
    }

    async function deleteitem(id) {
        console.log(id)

        try {
            const content = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            if (content.status !== 200) {
                return
            }
            setArticles(articles.filter((article) => article.id !== id))

            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserPosts.Provider
            value={{ articles, deleteitem, title, setTitle, body, setBody, Addarticle, status }}
        >
            {children}
        </UserPosts.Provider>
    )
}
function UserPostProvider({ children }) {
    const [article, setArticle] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState([])
    const [userId, setUserId] = useState([])
    const [status, setstatus] = useState([])

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
            setstatus(content.status)
            console.log(content.status)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserPost.Provider
            value={{ article, title, setTitle, body, setBody, articleUpdate, status }}
        >
            {children}
        </UserPost.Provider>
    )
}

export { UserPostsProvider, UserPosts, UserPostProvider, UserPost }

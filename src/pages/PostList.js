import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/post'

function PostList() {
    const { posts } = useContext(Context)

    const postsList = posts.map((post) => (
        <div key={post.id} className="show-note">
            <h1>
                <Link to={`/${post.id}`}>{post}</Link>
            </h1>
        </div>
    ))

    return <div className="show-content">{postsList}</div>
}

export default PostList

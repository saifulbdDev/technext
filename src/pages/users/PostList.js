/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { UserPosts } from '../../Context/userpostContext'

function Articles() {
    const { articles } = useContext(UserPosts)
    const [count, setCount] = useState(10) // initial count to show initial items

    const addMore = () => {
        // function that will make count add by 2 to show 2 more items
        setCount(count + 10)
    }

    const articlesList = articles.slice(0, count).map((article) => (
        <div key={article.id} className="col-md-4 mb-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {article.title}</h5>
                    <p className="card-text">{article.body.slice(0, 100)}</p>

                    <Link to={`/profile/post/${article.id}`} className="btn btn-outline-success">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    ))

    return (
        <section className="articlesList-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row">{articlesList}</div>
                        <div className="load-more">
                            <button className="btn theme-outline-btn mt-4 btn-lg" onClick={addMore}>
                                load more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles

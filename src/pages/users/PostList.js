/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import { UserPosts } from '../../Context/userpostContext'

function Articles() {
    const { articles, deleteitem, setTitle, title, setBody, body, Addarticle, status } =
        useContext(UserPosts)
    const [count, setCount] = useState(10) // initial count to show initial items
    const [show, setShow] = useState(false)
    const addMore = () => {
        // function that will make count add by 2 to show 2 more items
        setCount(count + 10)
    }
    console.log(status)
    console.log(articles)
    // if (status === 201) {
    //     setShow(false)
    // }

    const articlesList = articles.slice(0, count).map((article) => (
        <div key={article.id} className="col-md-4 mb-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {article.title}</h5>
                    <p className="card-text">{article.body.slice(0, 100)}</p>

                    <Link
                        to={`/own-post/${article.id}`}
                        className="btn theme-outline-btn btn-right"
                    >
                        Read More
                    </Link>
                    <Link
                        to={`/own-post/update/${article.id}`}
                        className="btn btn-outline-success  btn-right"
                    >
                        Update
                    </Link>
                    <button
                        onClick={() => deleteitem(article.id)}
                        className="btn btn-outline-danger  btn-right"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ))

    return (
        <section className="articlesList-section">
            <Modal show={show} onClose={() => setShow(false)}>
                <div className="content">
                    <h3>New Post Add</h3>
                    <from>
                        <div className="mb-3">
                            <label className="form-label">Post title</label>
                            <input
                                value={title}
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"
                                placeholder=" Post title"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                className="form-control"
                                rows="5"
                            />
                        </div>
                        <button className="btn theme-btn" onClick={() => Addarticle()}>
                            Save
                        </button>
                        <button className="btn " onClick={() => setShow(false)}>
                            Close
                        </button>
                    </from>
                </div>
            </Modal>
            <div className="container">
                <div className="post_add">
                    <button className="btn theme-btn" onClick={() => setShow(true)}>
                        Add New Post
                    </button>
                </div>
                <div className="row">{articlesList}</div>
                <div className="load-more">
                    <button className="btn theme-outline-btn mt-4 btn-lg" onClick={addMore}>
                        load more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Articles

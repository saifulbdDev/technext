/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { UserPost } from '../../Context/userpostContext'

function Article() {
    const { article, comments } = useContext(UserPost)

    const CommentList = comments.map((comment) => (
        <div className="card p-3" key={comment.id}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-md-2">
                    <img
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        width="70"
                        className="user-img rounded-circle mr-2"
                    />
                </div>
                <div className="col-md-10">
                    <h4 className="card-title">
                        <small className="card-email">{comment.email}</small>
                        <span className="card-name">{comment.name}</span>
                    </h4>
                    <p className="card-text">{comment.body}</p>
                </div>
            </div>
        </div>
    ))

    return (
        <section className="articlesList-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row   mt-5">
                    <div className="col-md-9 mx-auto">
                        <div className="headings d-flex justify-content-between align-items-center mb-3">
                            <h5>Total Comments ({comments.length})</h5>
                        </div>
                        {CommentList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article

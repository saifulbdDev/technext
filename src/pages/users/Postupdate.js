/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { UserPost } from '../../Context/userpostContext'

function Articles() {
    const { article  } = useContext(UserPost)
    const [count, setCount] = useState(10) // initial count to show initial items

    const addMore = () => {
        // function that will make count add by 2 to show 2 more items
        setCount(count + 10)
    }

    return (
        <section className="articlesList-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <div className="mb-3">
                            <label className="form-label">Post title</label>
                            <input
                                value={article.title}
                                type="text"
                                onChange={(e) => article.setArticle(e.target.value)}
                                className="form-control"
                                placeholder=" Post title"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea value={article.body} className="form-control" rows="5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Articles)

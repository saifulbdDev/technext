/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { UserPost } from '../../Context/userpostContext'

function Articles() {
    const { articless } = useContext(UserPost)
    const [count, setCount] = useState(10) // initial count to show initial items

    const addMore = () => {
        // function that will make count add by 2 to show 2 more items
        setCount(count + 10)
    }

    return (
        <section className="articlesList-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {' '}
                            <from>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Example textarea
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    />
                                </div>
                            </from>
                        </div>
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

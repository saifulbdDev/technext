/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { Users } from '../../Context/usersContext'

function Articles() {
    const { users, useSortableData } = useContext(Users)
    const { items, requestSort, sortConfig } = useSortableData(users)
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }
    const userlist = items.map((user) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
        </tr>
    ))
    return (
        <section className="articlesList-section">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button
                                    onClick={() => requestSort('name')}
                                    className={getClassNamesFor('name')}
                                >
                                    <label className="form-label">Name</label>
                                </button>

                                <input type="text" className="form-control" placeholder="Name" />
                            </th>
                            <th scope="col">
                                <button
                                    onClick={() => requestSort('email')}
                                    className={getClassNamesFor('email')}
                                >
                                    <label className="form-label">Email address</label>
                                </button>

                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Name@example.com"
                                />
                            </th>
                            <th scope="col">
                                <label className="form-label">Website</label>
                                <input type="text" className="form-control" placeholder="Website" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>{userlist}</tbody>
                </table>
            </div>
        </section>
    )
}

export default Articles

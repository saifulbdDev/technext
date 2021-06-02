/* eslint-disable no-const-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { Users } from '../../Context/usersContext'

function Articles() {
    const { users, useSortableData, state } = useContext(Users)
    const { items, requestSort, sortConfig } = useSortableData(users)
    const searchitems = []
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }

    const handleOnChange = (e) => {
        fiterby(e.target.value, e.target.name)
    }
    const fiterby = (name, title) => {
        searchitems = items
            .filter((item) => item.name.indexOf(name) !== -1)
            .map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                </tr>
            ))
    }

    const userlist = searchitems.map((user) => (
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

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={state.name}
                                    onChange={handleOnChange}
                                />
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
                    <tbody>{searchitems}</tbody>
                </table>
            </div>
        </section>
    )
}

export default Articles

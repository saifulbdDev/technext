/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Users } from '../../Context/usersContext'

function UserList() {
    const { users, useSortableData, state } = useContext(Users)
    const {
        items,
        requestSort,
        sortConfig,
        handleSearchEvents,
        setpagination,
        handlePrev,
        handleNext,
    } = useSortableData(users)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }

    const handleOnChange = (e) => {
        handleSearchEvents(e.target.value, e.target.name)
    }
    const history = useHistory()

    const ChangeUser = (id) => {
        localStorage.setItem('userId', JSON.stringify(id))
        history.push(`/profile`)
    }
    const rows = []

    // generate the table rows
    // based on container representational pattern and Hook, CountryTable should not have business logic
    items.forEach((dataObj) => {
        rows.push(
            <tr key={dataObj.id}>
                <td>
                    <button className="btn" onClick={() => ChangeUser(dataObj.id)}>
                        {dataObj.name}
                    </button>
                </td>
                <td>{dataObj.email}</td>
                <td>{dataObj.website}</td>
            </tr>
        )
    })

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
                                    name="email"
                                    value={state.email}
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Name@example.com"
                                    onChange={handleOnChange}
                                />
                            </th>
                            <th scope="col">
                                <label className="form-label">Website</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Website"
                                    name="website"
                                    value={state.website}
                                    onChange={handleOnChange}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                <nav aria-label="..." className="text-center">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button
                                className="page-link"
                                tabIndex="-1"
                                aria-disabled="true"
                                onClick={() => handlePrev()}
                            >
                                Previous
                            </button>
                        </li>

                        <li className="page-item " aria-current="page">
                            <button className="page-link" onClick={() => setpagination(3)}>
                                3
                            </button>
                        </li>
                        <li className="page-item " aria-current="page">
                            <button className="page-link" onClick={() => setpagination(5)}>
                                5
                            </button>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <button className="page-link" onClick={() => setpagination('all')}>
                                All
                            </button>
                        </li>

                        <li className="page-item">
                            <button className="page-link" onClick={() => handleNext()}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default UserList

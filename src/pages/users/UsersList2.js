/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
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
    const { users, useSortableData, state, setState } = useContext(Users)
    const { items, requestSort, sortConfig, } = useSortableData(users)
   
   
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }
   
   const handleSearchEvents = (title, name) => {
         console.log(setState)
        setState({ [name]: title })
        console.log(name, title)
    }
    const handleOnChange = (e) => {
        handleSearchEvents(e.target.value, e.target.name)
    }
    const filteredData = items.filter(
        (dataObj) =>
            dataObj.name.indexOf(state.name) !== -1 &&
            dataObj.email.indexOf(state.email) !== -1 &&
            dataObj.website.indexOf(state.website) !== -1
    )
    const rows = []

        // generate the table rows
        // based on container representational pattern and Hook, CountryTable should not have business logic
        filteredData.forEach((dataObj) => {
            rows.push(
                <tr key={dataObj.id}>
                    <td>{dataObj.name}</td>
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
                    <tbody>{rows}</tbody>
                </table>
            </div>
        </section>
    )
}

export default Articles

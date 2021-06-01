/* eslint-disable import/named */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { Users } from '../../Context/usersContext'

function Articles() {
    const { users } = useContext(Users)
    const userlist = users.map((user) => (
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    ))
    return (
        <section className="articlesList-section">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>{userlist}</tbody>
                </table>
            </div>
        </section>
    )
}

export default Articles
